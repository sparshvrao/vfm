
/*list of file links*/
    let filelink=[
        {cs2020001:""}
    ];





    $(document).ready(function () {
        $('.mydatatable').DataTable();
        $('.dataTables_length').addClass('bs-select');
       // loadTable(fileData);
        //showtile();
      });


    function dostuff(row){
        var nextel = row.nextElementSibling;
        var table = row.parentNode;
        if(nextel!=null && nextel.children.length==1 && nextel.style.display!="none"){
            nextel.style.display="none";
        }else{
            console.log(spancol(row));
            adddiv(row);
        }
    } 
    function adddiv(row){
        var index = nodeindex(row);
        var data = row;
        var col  = spancol(row);
        console.log(col);
        data.outerHTML +=  `<tr>
                        <td colspan="`+col+`" class="tile">
                        <div class="contents">
                        <button class="btn1" >Preview <i class="fa fa-eye"></i></button>
                        <button class="btn2" onclick="btnclick(this)">Download <i class="fa fa-download"></i></button>
                        </div>
                        </td>
                    </tr>`;

    }
    
/*Functions for table data manipulation*/
    function spancol(row){
        return row.children.length;
    }
    function nodeindex(node){           //returns index of a node
        var parent = node.parentNode;
        var i=0;
        while((node=node.previousElementSibling)!=null){
            i+=1;
        }
        return i+1;
    }

    function btnclick(event){
        console.log(event);
        event.innerHTML+=`<iframe src="..//Form.docx" height="0" width="0"> </iframe>`;
    }

