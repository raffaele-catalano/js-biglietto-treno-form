Train Ticket Form
===
### Scope
>Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
Il prezzo del biglietto è definito in base ai km (0.21€ al km);
va applicato uno sconto del 20% per i minorenni
e va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in *forma umana* (con massimo due decimali, per indicare centesimi sul prezzo).

### Milestone #1
>implementare il programma senza alcuna estetica: usare esclusivamente due input e un bottone (non stilizzati), realizzare le specifiche sopracitate. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

### Milestone #2
>realizzare un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il *recap* dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### Bonus 
> Aggiungere un bottone “reset” + Aggiungere random il numero della carrozza e il codice passeggero.

## Steps Schedule
- chiedere e salvare il `nome`;
- chiedere e salvare il `cognome`;
- chiedere e salvare l'`età`;
- chiedere e salvare il `numero di chilometri` che intende percorrere;
- calcolare il prezzo totale del viaggio `(0.21€ per Km)`;
- ri-calcolare il prezzo totale in base allo `sconto` sull'età: `20% per i minorenni` **/** `40% per gli over 65`;
- ri-calcolare il prezzo totale arrotondato per eccesso e con massimo due decimali.

<!-- ## Dataset Preparation
| Dataset | Download |
| ---     | ---   |
| dataset-A | [download]() |
| dataset-B | [download]() |
| dataset-C | [download]() |

## Use
- for train
  ```
  python train.py
  ```
- for test
  ```
  python test.py
  ```
## Pretrained model
| Model | Download |
| ---     | ---   |
| Model-1 | [download]() |
| Model-2 | [download]() |
| Model-3 | [download]() |


## Directory Hierarchy
```
```
## Code Details
### Tested Platform
- software
  ```
  OS: Debian unstable (May 2021), Ubuntu LTS
  Python: 3.8.5 (anaconda)
  PyTorch: 1.7.1, 1.8.1
  ```
- hardware
  ```
  CPU: Intel Xeon 6226R
  GPU: Nvidia RTX3090 (24GB)
  ```
### Hyper parameters
```
```
## References
- [paper-1]()
- [paper-2]()
- [code-1](https://github.com)
- [code-2](https://github.com)
  
## License

## Citing
If you use xxx,please use the following BibTeX entry.
```
``` -->
