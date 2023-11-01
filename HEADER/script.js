/* 

URL DA API

<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script type="text/javascript" src="/api/content/read/162/export_csv.js"></script>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"></script>
*/


/* 
_________VARIAVEIS
const filtrar = document.getElementById("filtrar")
const limpar  = document.getElementById("limpar")

_________FILTRAR
filtrar.addEventListener("click", () =>{
  dispatchEvent({
    formId: 'fQkGYG'   ---ID DO FORM
  })
})
_________LIMPAR
limpar.addEventListener("click" , () => {
    dispatchEvent({
        formFlowId: 'fzgGCp',  --- ID DO DASHB QUE VAI RODAR
        formType: 'openFlow',
        params: [ { paramName: 'prm_filtro_mes', paramValue: 'all_'},
                {paramName: 'prm_filtro_cidade', paramValue: 'all_'} ,
                {paramName: 'prm_filtro_SimCard', paramValue: 'all_'}, 
                {paramName: 'prm_filtro_Regiao', paramValue: 'all_'},
                {paramName: 'prm_filtro_Distribuidor', paramValue: 'all_'}
                ]
    })
})
_________EXPORTAR
--  Inserir no HTML => onclick = "download()" <=  onde terá o evento
function download(){                 
    fetch('http://10.51.130.235/api/content/prepare-download/outputs/466/view_relatorio_detalhado.csv', {  ---ALTERAR O BUCKET E TABELA QUE PRECISAR ALTERAR SEMPRE EM .CVS
        headers: {
        Authorization: "Bearer " + localStorage.getItem('gaio@token')
        }
      })
 
  .then(response => response.json())
  .then(res => {
    const link = document.createElement('a');
    link.setAttribute('download', 'relatorio_detalhado.csv'); // or any other extension ---RELATORIO_DETALHADO SERÁ O NOME DO CSV 
    link.href = 'http://10.51.130.235/api/content/download/'+res.download;
    document.body.appendChild(link)
;
    link.click();
  })
 
 
}

*/


