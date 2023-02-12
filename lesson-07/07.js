function makeTask(data) {
  // const completed = false;
  // const category = "General";
  // const priority = "Normal";
  // Change code below this line
  // let text = '';
  const {
    category = "General",
    priority = "Normal",
    completed = false,
    text,
  } = data;
  return { category, priority, text , completed};
  // Change code above this line
}

console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));