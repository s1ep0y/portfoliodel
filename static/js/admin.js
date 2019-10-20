$( "#projectDELETE" ).submit(function( event ) {
    const projectValuesArr = $(this).serializeArray();
    const projectArrSend = {}
    for (let index = 0; index < projectValuesArr.length; index++) {
        const element = projectValuesArr[index];
        var name = element.name;
        var value = element.value;
        projectArrSend[name] = value
    }
    $.post( `/projects/${projectArrSend.id}?_method=DELETE`, (data, e)=>{
        alert(data + 'has been deleted')
    });
    event.preventDefault();
});

$( "#projectPATCH" ).submit(function( event ) {
    const projectValuesArr = $(this).serializeArray();
    const projectArrSend = {}
    for (let index = 0; index < projectValuesArr.length; index++) {
        const element = projectValuesArr[index];
        var name = element.name;
        var value = element.value;
        if(value){
        projectArrSend[name] = value
    }
    }
    var id = projectArrSend.id
    delete projectArrSend.id
    $.post( `/projects/${id}?_method=PUT`, projectArrSend,(data, e)=>{
        alert('Welp, u changed it')
    });
    event.preventDefault();
});

// ?_method=DELETE