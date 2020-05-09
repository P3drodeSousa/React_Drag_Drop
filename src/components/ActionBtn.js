import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { addList } from "../actions/listsActions";
import { addCard } from "../actions/cardsActions";

const ActionBtn = ({ list, addList, listId, addCard }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const btnText = list ? "Add another list" : "Add another card";
  const btnTextOpacity = list ? 1 : 0.5;
  const btnTxtcolor = list ? "white" : "inherit";
  const btnTextBackground = list ? "rgba(0,0,0, .15" : "inherit";

  const openForm = () => {
    setOpen(!open);
  };

  const handleAddList = () => {
    if (text) {
      addList(text);
      setText("");
    }
  };

  const renderAddBtn = () => {
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForBtnGroup,
          opacity: btnTextOpacity,
          color: btnTxtcolor,
          backgroundColor: btnTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{btnText}</p>
      </div>
    );
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddCard = () => {
    if (text) {
      addCard(listId, text);
      setText("");
    }
  };

  const renderForm = () => {
    const placeholder = list
      ? "Enter List title..."
      : "Enter a title for this card ...";

    const btnTitle = list ? "Add List " : "Add Card";

    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none",
            }}
          />
        </Card>
        <div style={styles.formBtnGroup}>
          <Button
            onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {btnTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  const closeForm = () => {
    setOpen(!open);
  };

  return open ? renderForm() : renderAddBtn();
};

const styles = {
  openForBtnGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formBtnGroup: {
    marginTop: 8,
    display: "flex",
    alignitems: "center",
  },
};
export default connect(null, { addList, addCard })(ActionBtn);
