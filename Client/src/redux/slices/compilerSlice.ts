import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";
}

const initialState: InitialStateType = {
  fullCode: {
    html: `<html lang="en">
  <body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Enter your task">
        <button onclick="addTask()">Add Task</button>
        <ul id="taskList"></ul>
    </div>
  <script src="script.js"></script>
  </body>
</html>`,
    css: `
      body {
      font-family: 'Arial', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50vh;
      margin: 0;
   
  }
  
  .container {
      text-align: center;
  }
  
  input {
      padding: 8px;
      margin-right: 8px;
  }
  
  button {
      padding: 8px;
  } 
    `,
    javascript: `  function addTask() {
  
      var taskInput = document.getElementById('taskInput');
      var taskList = document.getElementById('taskList');
      if (taskInput.value !== '') {
          var taskItem = document.createElement('li');
          taskItem.textContent = taskInput.value;
          taskList.appendChild(taskItem);
          taskInput.value = '';
  
          taskItem.addEventListener('click', function () {
              taskList.removeChild(taskItem);
          });
      }
  }`,
  },

  currentLanguage: "html",
};
const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    setCurrentLanguage: (
      state,
      action: PayloadAction<InitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },

    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<InitialStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;

export const { setCurrentLanguage, updateCodeValue, updateFullCode } =
  compilerSlice.actions;
