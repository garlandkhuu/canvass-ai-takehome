const parseDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const month = date.toLocaleDateString('default', { month: 'long'});
    const day = date.getDay().toLocaleString(
      'default', { minimumIntegerDigits: 2, useGrouping: false }
    );
    const year = date.getFullYear();
    
    return `${month} ${day} ${year}`
  } catch {
    console.log('invalid date parsed');
    return '';
  }
};

export default parseDate;
