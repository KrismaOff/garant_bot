import { exceptions } from "@/data/staticData"
import { useState, useEffect } from 'react';

export default function useHandleDataForm(tableKey) {
  const [filteredKeys, setFilteredKeys] = useState();
  const [objectForApi, setObjectForApi] = useState();

  useEffect(() => {
    const newFilteredKeys = tableKey?.filter(val => exceptions.inputForm.indexOf(val) === -1);
    setFilteredKeys(newFilteredKeys);
  }, [tableKey]);

  useEffect(() => {
    if (filteredKeys) {
      const newObjectForApi = filteredKeys.reduce((acc, curr) => ((acc[curr] = ''), acc), {});
      setObjectForApi(newObjectForApi);
    }
  }, [filteredKeys]);

  return [filteredKeys, objectForApi];
}