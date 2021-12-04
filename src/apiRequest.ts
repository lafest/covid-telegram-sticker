import request from 'request';

// // const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19';
let queryParams = '?' + encodeURIComponent('serviceKey') + '=cyj1uVlLFPUFL50w65%2BxIDrPDEgCmJawq8RR5s%2BUQW9qRN0mY%2F29gJbYjt018zVAaccy9lxVc5bUYv9%2FTRoyMQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310'); /* */
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200315'); /* */

request({
  url: url + queryParams,
  method: 'GET'
}, function (error, response, body) {
  console.log('Status', response.statusCode);
  console.log('Headers', JSON.stringify(response.headers));
  console.log('Reponse received', body);
});