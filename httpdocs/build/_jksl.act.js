function JKActionListener() {
  this.list = {
               "J&K":"menu_home",
               "Embedded":"menu_1",
               "Enterprise":"menu_3",
               "Financial":"menu_4",
               "Games":"menu_5",
               "Micro":"menu_6",
               "Media":"menu_7",
               "Network":"menu_8",
               "Philosophy":"menu_9",
               "Robot":"menu_10",
               "RT":"menu_11",
               "Social":"menu_12",
               "Seсurity":"menu_13",
               "Sensors":"menu_14",
               "Downloads":"menu_15",
               "News":"menu_16",
               "Support":"menu_17"
    };
  
  this.init = function(id) {
    document.getElementById(id).innerHTML += '<table width=100%><tr>';
    
    for (var k in this.list) {
      document.getElementById(id).innerHTML += '<td id="' + this.list[k] + '">&nbsp ' + k +' &nbsp</td>';
    };
    
    document.getElementById(id).innerHTML += '</tr></table>';
  };
};
