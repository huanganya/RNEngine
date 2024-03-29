import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useResults from "../../../hooks/useResults";
import SearchBar from "../../../components/SearchBar";
import ResultsList from "../../../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("pasta");
  const { results, searchApi, errorMessage } = useResults();
  const filterResultsByPrice = (price: string) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result: any) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
