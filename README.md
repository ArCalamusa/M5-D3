# M5-D3
Esercizi
Inizia creando una nuova applicazione React usando il comando create-react-app.
Importa nel progetto bootstrap@4.6.1 e react-bootstrap@1.6.4.

1. Crea un componente di nome MyBadge, che riceverà una stringa di testo e un colore come props. Questo componente dovrà renderizzare un componente Badge di react-bootstrap contenente tali proprietà.
2. Crea un componente di nome SingleBook come classe. Questo componente riceverà un libro come prop, e renderizzerà la sua copertina e il suo titolo. Utilizza il componente Card di react-bootstrap (l’oggetto libro può essere scelto da uno dei file .json forniti nell’esercizio di ieri).
3. Crea un componente di nome BookList. Questo componente riceve come prop un’array di libri e cicla il componente SingleBook per mostrarli uno per uno.
4. Crea un campo di testo controllato all’interno del componente BookList; il componente deve utilizzarlo come filtro e mostrare solamente i libri che contengono nel titolo il testo cercato. (Suggerimento: salva il contenuto del campo di testo nello stato del componente e utilizzalo per filtrare il tuo .map()).
5. Crea un oggetto di stato all’interno di SingleBook contenente una proprietà true/false di nome selected. Cliccando sulla copertina di un libro selected deve cambiare valore ad ogni click. Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.

![Schermata 2023-04-21 alle 09 30 30](https://user-images.githubusercontent.com/117526559/233572636-ce766b9f-261f-4ff8-abf8-ca8c1a2a3e13.png)
![Schermata 2023-04-21 alle 09 30 54](https://user-images.githubusercontent.com/117526559/233572645-cfd82be9-b9bd-4a68-928c-6b49b62c9e3e.png)
![Schermata 2023-04-21 alle 09 31 16](https://user-images.githubusercontent.com/117526559/233572652-f63d08d9-9cc4-4178-9d6c-1f25b9dd9647.png)
![Schermata 2023-04-21 alle 09 31 44](https://user-images.githubusercontent.com/117526559/233572655-ba8054ed-85d3-446b-9f6d-fe04ad3eda4d.png)
![Schermata 2023-04-21 alle 09 33 39](https://user-images.githubusercontent.com/117526559/233572658-59bf137e-4d58-4c93-bdd8-cdee392b4d47.png)
