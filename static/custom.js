$.datetimepicker.setDateFormatter({
    parseDate: function (date, format) {
        var d = moment(date, format);
        return d.isValid() ? d.toDate() : false;
    },
    formatDate: function (date, format) {
        return moment(date).format(format);
    },
});

$('.datetime').datetimepicker({
    format:'DD-MM-YYYY hh:mm A',
    formatTime:'hh:mm A',
    formatDate:'DD-MM-YYYY',
    useCurrent: false,
});

// Initialise Pusher
const pusher = new Pusher('<PUSHER_KEY>', {
    cluster: '<PUSHER_CLUSTER>',
    encrypted: true
});

var channel = pusher.subscribe('table');

channel.bind('new-record', (data) => {

    const check_in = moment(`${data.data.check_in}`, 'DD/MM/YYYY hh:mm a').format('YYYY-MM-DD hh:mm:ss a')
    const depature = moment(`${data.data.depature}`, 'DD/MM/YYYY hh:mm a').format('YYYY-MM-DD hh:mm:ss a')
   $('#flights').append(`
        <tr id="${data.data.id}">
            <th scope="row"> ${data.data.flight} </th>
            <td> ${data.data.destination} </td>
            <td> ${check_in} </td>
            <td> ${depature} </td>
            <td> ${data.data.status} </td>
        </tr>
   `)
});

channel.bind('update-record', (data) => {

    const check_in = moment(`${data.data.check_in}`, 'DD/MM/YYYY hh:mm a').format('YYYY-MM-DD hh:mm:ss a')
    const depature = moment(`${data.data.depature}`, 'DD/MM/YYYY hh:mm a').format('YYYY-MM-DD hh:mm:ss a')

    $(`#${data.data.id}`).html(`
        <th scope="row"> ${data.data.flight} </th>
        <td> ${data.data.destination} </td>
        <td> ${check_in} </td>
        <td> ${depature} </td>
        <td> ${data.data.status} </td>
    `)

 });