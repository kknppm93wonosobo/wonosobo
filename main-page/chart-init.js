// Initialize Bar Chart for Population Data (Jobs)
document.addEventListener('DOMContentLoaded', () => {
  // Bar Chart
  const ctx = document.getElementById('barlinechart');
  
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Ibu Rumah Tangga',
          'Pelajar',
          'Belum Bekerja',
          'Petani',
          'Buruh Tani',
          'Wiraswasta',
          'Buruh Harian Lepas',
          'Tidak Mempunyai Pekerjaan Tetap',
          'Pegawai Negeri Sipil',
          'Karyawan Honorer',
          'Karyawan Perusahaan Swasta',
          'Pedagang Keliling',
          'Purnawirawan/Pensiunan',
          'Guru Swasta',
          'Perawat Swasta',
          'Pedagang',
          'POLRI',
          'Bidan Swasta',
          'Satpam/Security',
          'Dosen Swasta',
          'Guru'
        ],
        datasets: [{
          label: 'Jumlah Penduduk',
          data: [324, 299, 168, 109, 97, 71, 64, 38, 23, 22, 14, 10, 5, 4, 2, 2, 1, 1, 1, 1, 1],
          backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(199, 199, 199, 0.8)',
            'rgba(83, 102, 255, 0.8)',
            'rgba(40, 159, 64, 0.8)',
            'rgba(210, 199, 199, 0.8)',
            'rgba(78, 52, 199, 0.8)',
            'rgba(255, 99, 184, 0.8)',
            'rgba(54, 162, 100, 0.8)',
            'rgba(255, 150, 86, 0.8)',
            'rgba(100, 192, 192, 0.8)',
            'rgba(200, 102, 255, 0.8)',
            'rgba(255, 80, 80, 0.8)',
            'rgba(80, 200, 120, 0.8)',
            'rgba(150, 100, 210, 0.8)',
            'rgba(255, 180, 100, 0.8)',
            'rgba(100, 150, 255, 0.8)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(199, 199, 199, 1)',
            'rgba(83, 102, 255, 1)',
            'rgba(40, 159, 64, 1)',
            'rgba(210, 199, 199, 1)',
            'rgba(78, 52, 199, 1)',
            'rgba(255, 99, 184, 1)',
            'rgba(54, 162, 100, 1)',
            'rgba(255, 150, 86, 1)',
            'rgba(100, 192, 192, 1)',
            'rgba(200, 102, 255, 1)',
            'rgba(255, 80, 80, 1)',
            'rgba(80, 200, 120, 1)',
            'rgba(150, 100, 210, 1)',
            'rgba(255, 180, 100, 1)',
            'rgba(100, 150, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 14,
                family: 'Arial'
              }
            }
          },
          title: {
            display: true,
            text: 'Data Pekerjaan Penduduk Pekon Wonosobo',
            font: {
              size: 18,
              weight: 'bold'
            },
            padding: 20
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.x + ' orang';
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Jumlah Penduduk (orang)',
              font: {
                size: 14
              }
            },
            ticks: {
              font: {
                size: 12
              }
            }
          },
          y: {
            ticks: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  }

  // Radial Chart (Doughnut) for Ethnicity Data
  const ctxRadial = document.getElementById('radialchart');
  
  if (ctxRadial) {
    new Chart(ctxRadial, {
      type: 'doughnut',
      data: {
        labels: ['Jawa', 'Batak', 'Sunda', 'China', 'Lampung', 'Banten'],
        datasets: [{
          label: 'Jumlah Penduduk',
          data: [1188, 44, 11, 9, 4, 1],
          backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              font: {
                size: 14,
                family: 'Arial'
              },
              padding: 15,
              generateLabels: function(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  const meta = chart.getDatasetMeta(0);
                  return data.labels.map((label, i) => {
                    const value = data.datasets[0].data[i];
                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    const isHidden = meta.data[i] && meta.data[i].hidden;
                    const text = `${label}: ${value} (${percentage}%)`;
                    return {
                      text: isHidden ? `${text}` : text,
                      fillStyle: data.datasets[0].backgroundColor[i],
                      hidden: isHidden,
                      index: i
                    };
                  });
                }
                return [];
              }
            },
            onClick: function(e, legendItem, legend) {
              const index = legendItem.index;
              const chart = legend.chart;
              const meta = chart.getDatasetMeta(0);
              
              // Toggle visibility
              meta.data[index].hidden = !meta.data[index].hidden;
              
              chart.update();
            }
          },
          title: {
            display: true,
            text: 'Data Etnis Penduduk Pekon Wonosobo',
            font: {
              size: 18,
              weight: 'bold'
            },
            padding: 20
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${label}: ${value} orang (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

  // Pie Chart for Religion Data
  const ctxPie = document.getElementById('piechart');
  
  if (ctxPie) {
    new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: ['Islam', 'Katholik', 'Kristen', 'Budha'],
        datasets: [{
          label: 'Jumlah Penduduk',
          data: [1205, 32, 16, 4],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              font: {
                size: 14,
                family: 'Arial'
              },
              padding: 15,
              generateLabels: function(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  const meta = chart.getDatasetMeta(0);
                  return data.labels.map((label, i) => {
                    const value = data.datasets[0].data[i];
                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    const isHidden = meta.data[i] && meta.data[i].hidden;
                    const text = `${label}: ${value} (${percentage}%)`;
                    return {
                      text: isHidden ? `${text}` : text,
                      fillStyle: data.datasets[0].backgroundColor[i],
                      hidden: isHidden,
                      index: i
                    };
                  });
                }
                return [];
              }
            },
            onClick: function(e, legendItem, legend) {
              const index = legendItem.index;
              const chart = legend.chart;
              const meta = chart.getDatasetMeta(0);
              
              // Toggle visibility
              meta.data[index].hidden = !meta.data[index].hidden;
              
              chart.update();
            }
          },
          title: {
            display: true,
            text: 'Data Agama Penduduk Pekon Wonosobo',
            font: {
              size: 18,
              weight: 'bold'
            },
            padding: 20
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${label}: ${value} orang (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

  // Bar Line Chart for Education Data
  const ctxBarLine = document.getElementById('barlinechart1');
  
  if (ctxBarLine) {
    new Chart(ctxBarLine, {
      type: 'bar',
      data: {
        labels: [
          'Tamat SD/Sederajat',
          'Tamat SLTP/Sederajat',
          'Tamat SLTA/Sederajat',
          'Sedang SD/Sederajat',
          'Tidak Tamat SD/Sederajat',
          'Belum masuk TK/Kelompok Bermain',
          'Sedang SLTP/Sederajat',
          'Sedang SLTA/Sederajat',
          'Sedang TK/Kelompok Bermain',
          'Tamat S-1/Sederajat',
          'Sedang S-1/Sederajat',
          'Tidak Pernah Sekolah',
          'Tamat D-3/Sederajat',
          'Sedang D-1/Sederajat',
          'Tamat S-2/sederajat',
          'Tamat TK/Sederajat'
        ],
        datasets: [{
          label: 'Jumlah Penduduk',
          data: [324, 215, 204, 117, 76, 62, 57, 41, 39, 32, 31, 29, 28, 1, 1, 0],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 14,
                family: 'Arial'
              }
            }
          },
          title: {
            display: true,
            text: 'Data Pendidikan Penduduk Pekon Wonosobo',
            font: {
              size: 18,
              weight: 'bold'
            },
            padding: 20
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.x + ' orang';
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Jumlah Penduduk (orang)',
              font: {
                size: 14
              }
            },
            ticks: {
              font: {
                size: 12
              }
            }
          },
          y: {
            ticks: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  }
});