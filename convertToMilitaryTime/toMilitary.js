/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
string s: a time in 12hour format
Returns
string: the time in  24hour format
Input Format
A single string 's' that represents a time in 12-hour clock format
Constraints
All input times are valid
Sample Input
07:05:45PM
Sample Output
19:05:45
*/

function timeConversion(s) {
  // Write your code here
  let hours = s.substr(0, 2);
  let mins = s.substr(3, 2);
  let secs = s.substr(-4, 2);
  let edit = s.substr(-2, 2);
  if (hours === '12') {
      hours = '00';
  }
  if (edit === 'PM') {
      hours = parseInt(hours, 10) + 12;
  }
  let time = `${hours}:${mins}:${secs}`;
  return time;

}