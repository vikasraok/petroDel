import React, { Component } from 'react';
import moment from 'moment';
import chrono from 'chrono-node';
import { datePicker } from '../components/selectStyle';
import Select from 'react-select';
import { components as SelectComponents } from 'react-select';

const createOptionForDate = d => {
  const date = moment.isMoment(d) ? d : moment(d);
  return {
    date,
    value: date.toDate(),
    label: date.calendar(null, {
      sameDay: '[Today] (Do MMM YYYY)',
      nextDay: '[Tomorrow] (Do MMM YYYY)',
      nextWeek: '[Next] dddd (Do MMM YYYY)',
      lastDay: '[Yesterday] (Do MMM YYYY)',
      lastWeek: '[Last] dddd (Do MMM YYYY)',
      sameElse: 'Do MMMM YYYY'
    })
  };
};

const defaultOptions = ['today'].map(i =>
  createOptionForDate(chrono.parseDate(i))
);

const createCalendarOptions = (date = new Date()) => {
  // $FlowFixMe
  const daysInMonth = Array.apply(null, {
    length: moment(date).daysInMonth()
  }).map((x, i) => {
    const d = moment(date).date(i + 1);
    return { ...createOptionForDate(d), display: 'calendar' };
  });
  return {
    label: moment(date).format('MMMM YYYY'),
    options: daysInMonth
  };
};

defaultOptions.push(createCalendarOptions());

const suggestions = [
  'sunday',
  'saturday',
  'friday',
  'thursday',
  'wednesday',
  'tuesday',
  'monday',
  'december',
  'november',
  'october',
  'september',
  'august',
  'july',
  'june',
  'may',
  'april',
  'march',
  'february',
  'january',
  'yesterday',
  'tomorrow',
  'today'
].reduce((acc, str) => {
  for (let i = 1; i < str.length; i++) {
    acc[str.substr(0, i)] = str;
  }
  return acc;
}, {});

const suggest = str =>
  str
    .split(/\b/)
    .map(i => suggestions[i] || i)
    .join('');

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const daysHeaderStyles = {
  marginTop: '5px',
  paddingTop: '5px',
  paddingLeft: '2%',
  borderTop: '1px solid #eee'
};
const daysHeaderItemStyles = {
  color: '#999',
  cursor: 'default',
  display: 'block',
  fontSize: '75%',
  fontWeight: '500',
  display: 'inline-block',
  width: '12%',
  margin: '0 1%',
  textAlign: 'center'
};
const daysContainerStyles = {
  paddingTop: '5px',
  paddingLeft: '2%'
};

const Group = props => {
  const {
    Heading,
    getStyles,
    children,
    label,
    innerProps,
    headingProps,
    cx,
    theme
  } = props;
  return (
    <div aria-label={label} style={getStyles('group', props)} {...innerProps}>
      <Heading theme={theme} getStyles={getStyles} cx={cx} {...headingProps}>
        {label}
      </Heading>
      <div style={daysHeaderStyles}>
        {days.map((day, i) => (
          <span key={`${i}-${day}`} style={daysHeaderItemStyles}>
            {day}
          </span>
        ))}
      </div>
      <div style={daysContainerStyles}>{children}</div>
    </div>
  );
};

const getOptionStyles = defaultStyles => ({
  ...defaultStyles,
  display: 'inline-block',
  width: '12%',
  margin: '0 1%',
  textAlign: 'center',
  borderRadius: '4px'
});

const Option = props => {
  const { data, getStyles, innerRef, innerProps } = props;
  if (data.display === 'calendar') {
    const defaultStyles = getStyles('option', props);
    const styles = getOptionStyles(defaultStyles);
    if (data.date.date() === 1) {
      const indentBy = data.date.day();
      if (indentBy) {
        styles.marginLeft = `${indentBy * 14 + 1}%`;
      }
    }
    return (
      <span {...innerProps} style={styles} ref={innerRef}>
        {data.date.format('D')}
      </span>
    );
  } else return <SelectComponents.Option {...props} />;
};

export default class DatePicker extends Component {
  state = {
    options: defaultOptions,
    date: null
  };
  handleInputChange = value => {
    if (!value) {
      this.setState({ options: defaultOptions });
      return;
    }
    const date = chrono.parseDate(suggest(JSON.stringify(value).toLowerCase()));
    if (date) {
      this.setState({
        options: [createOptionForDate(date), createCalendarOptions(date)]
      });
    } else {
      this.setState({
        options: []
      });
    }
  };
  render() {
    const { options, date } = this.state;
    return (
      <Select
        {...this.props}
        components={{ Group, Option }}
        filterOption={null}
        isMulti={false}
        isOptionSelected={(o, v) => v.some(i => i.date.isSame(o.date, 'day'))}
        maxMenuHeight={380}
        styles={datePicker}
        onChange={date => {
          this.setState({ date });
          this.props.onChange(moment(date.value).format('DD/MM/YYYY'));
        }}
        onInputChange={this.handleInputChange}
        options={options}
        value={date || options[0]}
      />
    );
  }
}
