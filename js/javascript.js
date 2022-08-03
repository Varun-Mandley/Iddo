
const ctx = document.querySelector('.c1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      
        datasets: [{
            label: '# of Votes',
            data: [75,25],
            backgroundColor: [
                'rgba(255, 0, 0)',
                'rgba(255, 255, 255)'
                
                
            ],
           
            borderWidth: 4,
           
            
        }]
    },
   
});
const ct2 = document.querySelector('.c2').getContext('2d');
const myChart2 = new Chart(ct2, {
    type: 'doughnut',
    data: {
      
        datasets: [{
            label: '# of Votes',
            data: [65,35],
            backgroundColor: [
                'rgba(255, 0, 0)',
                'rgba(255, 255, 255)'
                
                
            ],
           
            borderWidth: 4,
            
            
        }]
    },
   
});
const ct3 = document.querySelector('.c3').getContext('2d');
const myChart3 = new Chart(ct3, {
    type: 'doughnut',
    data: {
      
        datasets: [{
            label: '# of Votes',
            data: [50,50],
            backgroundColor: [
                'rgba(255, 0, 0)',
                'rgba(255, 255, 255)'
                
                
            ],
           
            borderWidth: 4,
            
            
        }]
    },
   
});
const ct4 = document.querySelector('.c4').getContext('2d');
const myChart4 = new Chart(ct4, {
    type: 'doughnut',
    data: {
      
        datasets: [{
            label: '# of Votes',
            data: [25,75],
            backgroundColor: [
                'rgba(255, 0, 0)',
                'rgba(255, 255, 255)'

                
                
            ],
           
            borderWidth: 4,
            
        }]
    },
   
});
