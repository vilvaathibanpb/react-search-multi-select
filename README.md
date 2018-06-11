### React-Search-Multi-Select

A simple customisable React component with Select/Multi Select and Search

  - Fully Customizable - color, width, height, background etc
  - Combines Search functionality with multi-select and tags
  - Choose between multi/single select, display tags or not and allow search or not
  - Ideal for multi/single select with huge number of data and avoids scrolling much

### Installation

Dillinger requires [React.js and Prop-Types] to run.

```sh
$ npm i react-search-multi-select
```

### Demo

[Online Demo Link](https://vilvaathibanpb.github.io/react-search-multi-select-demo/)

### How to Use

Install and import react-search-multi-select and pass the props

```sh
import React, { Component } from "react";
import MultiSearchSelect from "react-search-multi-select";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]
    };
  }
  handleChange = (arr) => {
    console.log(arr);
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="500px" onSelect={this.handleChange} options={this.state.values}/>
      </div>
    );
  }
}

export default App;
```

### Props:

#### Prop-Types:

```sh
{
    options: PropTypes.array.isRequired,
    optionsContainerHeight: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    width: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    textColor: PropTypes.string,
    textSecondaryColor: PropTypes.string,
    className: PropTypes.string,
    searchable: PropTypes.bool,
    showTags: PropTypes.bool,
    multiSelect: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    onUserInput: PropTypes.func, /* Function to get values typed by user in Search box */
}
```

#### Default-Props

```sh
{
    optionsContainerHeight: "50vh",
    searchPlaceholder: "Search...",
    className: "",
    width: "200px",
    primaryColor: "#e1e1e1",
    secondaryColor: "#046fc0",
    textColor: "#000",
    textSecondaryColor: "#fff",
    searchable: true,
    showTags: true,
    multiSelect: true
}
```

## Contribution

You are welcome to raise issues and PRs in the [repository](https://github.com/vilvaathibanpb/react-search-multi-select)
