let today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

$.ajax({
  url:
    'https://api.covid19api.com/live/country/india/status/confirmed/date/' +
    yesterday.toISOString(),
  type: 'get',
  dataType: 'json',

  success: function (data) {
    drawTable(data)
  },
})

function drawTable(data) {
  $('#heading').append(` - ${today.toString()}`)
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i])
  }
}

function drawRow(rowData) {
  var row = $('<tr />')
  $('#covidDataTable').append(row)
  row.append($('<td>' + rowData.Province + '</td>'))
  row.append($('<td>' + rowData.Confirmed + '</td>'))
  row.append($('<td>' + rowData.Deaths + '</td>'))
  row.append($('<td>' + rowData.Recovered + '</td>'))
  row.append($('<td>' + rowData.Active + '</td>'))
}
