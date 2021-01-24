import React, { useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Picker, PickerIOS } from "@react-native-picker/picker";
import styles from "./FormStyle";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ALL_BRANCHES, ALL_COMPANIES } from "../../graphql";
import GeneralStyle from "../Styling/GeneralStyle";

// TODO: Implement dropdown with react-native-dropdown-picker
// https://www.npmjs.com/package/react-native-dropdown-picker

const EmploymentForm = (props) => {

  const [companySelected, setCompanySelected] = useState("");
  const [companyList, setCompanyList] = useState();
  // const [branchList, setBranchList] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const { loading: allComapniesLoading, error: allCompaniesErr, data: allCompanies } = useQuery(ALL_COMPANIES, {
    variables: { filter: "{}" },
  });
  const [getAllBranchesByCompany, { 
    called: getBranchesCalled, 
    loading: getBranchesLoading, 
    data: allBranches,
    error: allBranchesErr
  }] = useLazyQuery(ALL_BRANCHES);
  
  const changeHandler = (key, value) => {
    props.setUserInput({
      ...props.userInput,
      [key]: value.trim()
    })
  };

  const handleCompanyChanged = (companyId) => {
    setCompanySelected(companyId);
    fetchBranches(companyId);
  }

  const handleEmploymentBranch = (employment_branch) => {
    changeHandler("employmentBranch", employment_branch);
  }

  const handleSubmit = () => {
    if (!props.userInput.employmentBranch) {
      setErrorMessage("Please Select your employment branch before continue");
    } else {
      props.submitAction()
    }
  }

  const fetchBranches = (companyId) => {
    const filter = {
      companyId: companyId.toString()
    };
    getAllBranchesByCompany({variables: {filter: JSON.stringify(filter)}});
  }

  return (
    <View style={styles.action}>
      {(!allComapniesLoading && allCompaniesErr) &&  (
        <Text style={GeneralStyle.errorText}>{allCompaniesErr.message}</Text>
      )} 
      {(allCompanies && allCompanies.companies.length > 0) && (
        <View>
          <Text>Brand/Company</Text>
          <Picker
            testId="Company-Picker"
            style={styles.dropdown}
            selectedValue={companySelected}
            onValueChange={(itemValue, itemIndex) =>
              handleCompanyChanged(itemValue)
            }>
              <Picker.Item key="brand-0" label="Select a brand/company" value="" />
              {(allCompanies && allCompanies.companies.length > 0) && (
                allCompanies.companies.map((company) => {
                  return (<Picker.Item key={company.id} label={company.companyNm} value={company.id} />)
                })
              )}
          </Picker>
        </View>
      )}
      {(!getBranchesLoading && allBranchesErr) &&  (
        <Text style={GeneralStyle.errorText}>{allBranchesErr.message}</Text>
      )} 
      {(allBranches && allBranches.branches.length > 0) && (
        <View>
          <Text>Branch</Text>
          <Picker
            testId="Branch-Picker"
            style={styles.dropdown}
            selectedValue={props.userInput.employmentBranch}
            onValueChange={(itemValue, itemIndex) =>
              handleEmploymentBranch(itemValue)
            }>
              <Picker.Item key="branch-0" label="Select a Branch" value="" />
              {allBranches.branches.length > 0 && (
                allBranches.branches.map((branch) => {
                  return (<Picker.Item key={branch.id} label={branch.branchAddr} value={branch.id} />)
                })
              )}
          </Picker>
        </View>
      )}

      {/* <Query query={ALL_BRANCHES}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            console.log(data)
          );
        }}
      </Query> */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSubmit}
        style={styles.formButtonContainer}
        disabled={(!companySelected || !allBranches)}
      >
        <Text style={styles.formButtonText}>{props.submitText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmploymentForm;