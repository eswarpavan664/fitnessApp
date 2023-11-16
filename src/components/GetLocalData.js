// Define an async method to get a value by key from localStorage
async function getLocalValueByKey(key) {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      // Value found in localStorage
      return value;
    } else {
      // Key not found in localStorage
      console.log(`Key "${key}" not found in localStorage.`);
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data from localStorage:', error);
    return null;
  }
}

// Define an async method to set a value by key in localStorage
async function setLocalValueByKey(key, value) {
  try {
    localStorage.setItem(key, value);
    console.log(`Value for key "${key}" set successfully.`);
  } catch (error) {
    // Error setting data
    console.error(`Error setting data for key "${key}" in localStorage:`, error);
  }
}

// Define an async method to remove a value by key from localStorage
async function removeLocalValueByKey(key) {
  try {
    localStorage.removeItem(key);
    console.log(`Key "${key}" removed from localStorage.`);
  } catch (error) {
    // Error removing data
    console.error(`Error removing key "${key}" from localStorage:`, error);
  }
}

export { getLocalValueByKey, setLocalValueByKey, removeLocalValueByKey };
