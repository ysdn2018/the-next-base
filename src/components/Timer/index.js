import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";
import GridBlock from "../GridBlock";

const Container = GridBlock.extend`
`;

const TimerContainer = styled.div`
  display: flex;
  width: 100%;
`

const TimerSection = styled.div`
  padding: 1rem;
  border: 1px solid black;
`

class CountdownTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeRemaining: {
				months: "",
				days: "",
				h: "",
				m: "",
				s: "",
				interval: function() {}
			},
			startDate: new moment(),
			min: new Date(),
			startTimer: false
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.state.interval = setInterval(this.tick, 1000);
    this.afterEachSecond(this.props.endDate);
	}

	componentWillUnmount() {
		this.state.interval && clearInterval(this.state.interval);
	}

	tick() {
		if (typeof this.props.endDate === typeof new Date()) {
			this.afterEachSecond(this.props.endDate);
		} else {
			console.log("timer error");
		}
	}

	afterEachSecond(endDate) {
		var temp = { months: "", days: "", h: "", m: "", s: "" };
		var now = moment(); // today's date
		var end = moment(endDate); // end date
		var duration = moment.duration(end.diff(now));

		if (duration.asSeconds() >= 0) {
			if (Math.floor(duration.asMonths()) > 0) {
				if (Math.floor(duration.asMonths()) < 10) {
					temp.months = "0" + Math.floor(duration.asMonths());
				} else {
					temp.months = Math.floor(duration.asMonths());
				}
			}
			if (Math.floor(duration.asDays()) > 0) {
				if (Math.floor(duration.days()) < 10) {
					temp.days = "0" + Math.floor(duration.days());
				} else {
					temp.days = Math.floor(duration.days());
				}
			}
			if (Math.floor(duration.asHours()) > 0) {
				if (Math.floor(duration.hours()) < 10) {
					temp.h = "0" + Math.floor(duration.hours());
				} else {
					temp.h = Math.floor(duration.hours());
				}
			}
			if (Math.floor(duration.asMinutes()) > 0) {
				if (Math.floor(duration.minutes()) < 10) {
					temp.m = "0" + Math.floor(duration.minutes());
				} else {
					temp.m = Math.floor(duration.minutes());
				}
			}
			if (Math.floor(duration.asSeconds()) > 0) {
				if (Math.floor(duration.seconds()) < 10) {
					temp.s = "0" + Math.floor(duration.seconds());
				} else {
					temp.s = Math.floor(duration.seconds());
				}
			}
		}
		this.setState({
			timeRemaining: temp
		});
	}

	render() {
		return (
			<TimerContainer>
        {this.state.timeRemaining.months && (
          <TimerSection>
  					<div>{this.state.timeRemaining.months}</div>
  					<div>Months</div>
  				</TimerSection>
        )}
				{this.state.timeRemaining.days && (
					<TimerSection>
						<div>{this.state.timeRemaining.days}</div>
						<div>Days</div>
					</TimerSection>
				)}
				{this.state.timeRemaining.h && (
					<TimerSection>
						<div>{this.state.timeRemaining.h}</div>
						<div>Hours</div>
					</TimerSection>
				)}
				{this.state.timeRemaining.m && (
					<TimerSection>
						<div>{this.state.timeRemaining.m}</div>
						<div>Minutes</div>
					</TimerSection>
				)}
				{this.state.timeRemaining.s && (
					<TimerSection>
						<div>{this.state.timeRemaining.s}</div>
						<div>Seconds</div>
					</TimerSection>
				)}
			</TimerContainer>
		);
	}
}

CountdownTimer.propTypes = {
	endDate: PropTypes.object.isRequired
};

export default function Timer(props) {
	return (
		<Container {...props}>
			<CountdownTimer endDate={moment(props.countdownDate)} />
		</Container>
	);
}
