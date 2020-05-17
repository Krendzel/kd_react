import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} ImageLink={this.props.image} />
        <div className={styles.description}>{ReactHtmlParser(this.props.description)}</div>
        <div className={styles.columns}>
          <Column>Hello</Column>
          <Column>Hello</Column>
          <Column>Hello</Column>
        </div>
      </section>
    );
  }
}

export default List;
