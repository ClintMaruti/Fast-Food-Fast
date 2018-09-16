var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanel = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
        
        
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanel.forEach(function(node){
        node.style.display="none";
        
    });
    tabPanel[panelIndex].style.display="block";
    tabPanel[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'rgba(85,82,76,0.5)')