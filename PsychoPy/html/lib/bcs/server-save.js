function saveData(name, data, type) {
	const blob = new Blob([data], { type });
	var xhr = new XMLHttpRequest(); // point to right place
  xhr.open('POST', 'write_data.php'); // 'write_data.php' is the path to the php file // open php file
  xhr.setRequestHeader('Content-Type', 'application/json'); // sending a JSON
  xhr.send(JSON.stringify({filename: name, filedata: data})); // save the data to the data folder. Will be a csv
}
export { saveData };
