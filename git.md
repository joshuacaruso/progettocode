# Cosa è git?
Git è un sistema di controllo versione distribuito utilizzato per tracciare le modifiche nel codice sorgente durante lo sviluppo del software.
Consente ai team di collaborare efficacemente gestendo le versioni del codice, facilitando il monitoraggio delle modifiche, il ripristino a versioni precedenti e la gestione dei rami di sviluppo.

## Cosa è ed a cosa serve un sistema di controllo versione distribuito?
Un sistema di controllo versione distribuito, come Git, consente a più sviluppatori di lavorare contemporaneamente su un progetto, tenendo traccia delle modifiche al codice sorgente in modo coordinato. Alcuni vantaggi includono:

1.  Collaborazione efficace: Diversi membri del team possono lavorare simultaneamente senza sovrapporsi o sovrascrivere le modifiche degli altri.
2.  Tracciamento delle modifiche: Ogni modifica al codice è registrata, consentendo di visualizzare la cronologia delle modifiche, chi le ha apportate e cosa è stato modificato.
3.  Ripristino a versioni precedenti: In caso di errori o problemi, è possibile tornare indietro e ripristinare il codice a una versione precedente.
4.  Gestione dei rami: I rami consentono di sviluppare nuove funzionalità o risolvere problemi senza influenzare il ramo principale, facilitando la gestione di sviluppi paralleli.
5.  Backup e sicurezza: Il sistema tiene traccia di tutte le versioni del codice, fornendo una sorta di backup automatico.
    Inoltre, le modifiche sono generalmente associate a commenti che ne spiegano il motivo, migliorando la comprensione del processo di sviluppo nel tempo.

In sintesi, un sistema di controllo versione distribuito migliora la gestione del codice durante lo sviluppo software, consentendo una collaborazione più efficace e offrendo un controllo più granulare sulle modifiche.

## Cosa significa distribuito?
In un contesto di sistemi di controllo versione, "distribuito" si riferisce al fatto che il repository del codice, che contiene la cronologia delle versioni e le informazioni sullo sviluppo, non è situato centralmente su un server. Invece, ogni membro del team ha una copia completa del repository sul proprio sistema locale.

## Cosa è una repository?
Una repository (o repo) in Git è un luogo dove vengono archiviati i file del tuo progetto, insieme alla cronologia delle modifiche a tali file. Può essere considerata come un contenitore che conserva tutte le versioni del tuo progetto nel tempo.

In una repository Git, troverai:

1. Working Directory (Directory di lavoro): La tua copia locale della repository, dove puoi modificare i file e apportare le modifiche al tuo progetto.
2. Index (Area di staging): Una zona di transizione in cui selezioni le modifiche specifiche che vuoi includere nel tuo prossimo commit.
3. HEAD: Il riferimento alla versione attuale nel repository. Può essere la posizione dell'ultima commit nel tuo ramo.
4. Storia dei Commit: Tutte le versioni precedenti del tuo progetto, registrate come commit. Ogni commit ha un identificatore unico (hash) e un messaggio che descrive le modifiche apportate.

Una repository può essere locale, situata sulla tua macchina, o remota, ospitata su servizi come GitHub, GitLab o Bitbucket. Le repository remote consentono agli sviluppatori di collaborare, condividere e sincronizzare il loro lavoro su più computer.
In sintesi, una repository in Git è il luogo centrale in cui vengono conservate e gestite tutte le versioni del tuo progetto, fornendo una storia completa delle modifiche e facilitando la collaborazione tra sviluppatori.

## Cos'è l'area di staging?
L'area di staging in Git è dove prepari le tue modifiche prima di renderle permanenti attraverso un commit.

## Cos'è un commit?
Un commit rappresenta un impegno permanente delle tue modifiche nel repository, creando una nuova istantanea della tua applicazione in quel momento specifico. Ciascun commit ha un messaggio che descrive le modifiche apportate.

## Come si installa?
Su Linux (Ubuntu come esempio), apri il terminale ed esegui i comandi: `sudo apt-get update ` e `sudo apt-get install git `
Su macOS apri il terminale e digita: `brew install git `
Su Windows puoi scaricare l'installer di Git da git-scm.com.
Dopo l'installazione, puoi verificare se Git è stato installato correttamente eseguendo il comando `git --version` nel terminale o prompt dei comandi.

## Dopo l'installazione, come si usa?

1. Configurazione iniziale:
Prima di iniziare, è consigliabile configurare il tuo nome utente e indirizzo email.
Esegui questi comandi nel terminale:

`git config --global user.name Il Tuo Nome `

`git config --global user.email tua@email.com`

2. Inizializzazione di un repository:
Se stai iniziando un nuovo progetto, naviga nella cartella del tuo progetto e esegui il seguente comando per inizializzare un nuovo repository Git:

`git init `

3. Clonare un repository esistente:
Se vuoi lavorare su un progetto esistente, puoi clonare il repository con il comando:

`git clone url_del_repository `

4. Aggiungere file al repository:
Dopo aver apportato delle modifiche ai file del tuo progetto, puoi aggiungerli al repository con:

`git add nome_file `

5. Effettuare un commit:
Dopo aver aggiunto i file, esegui un commit per registrare le modifiche nel repository:

`git commit -m "Messaggio del commit" `

6. Sincronizzazione con il repository remoto:
Se stai lavorando con un repository remoto, puoi sincronizzare le tue modifiche con il comando:

`git push origin branch_name `

## Cosa sono i rami? E come si usano?

In Git, i rami sono una caratteristica potente che consente di sviluppare diverse linee di lavoro in parallelo all'interno dello stesso repository. Un "ramo" è essenzialmente una linea separata di sviluppo che può contenere modifiche indipendenti rispetto agli altri rami. Può essere utilizzato per sviluppare nuove funzionalità, risolvere problemi o eseguire qualsiasi tipo di sviluppo separato.

Ecco alcuni concetti chiave relativi ai rami in Git:

1.  Ramo Principale (di solito "master" o "main"):

È il ramo principale del tuo progetto. Tutte le modifiche stabili e complete dovrebbero alla fine essere integrate in questo ramo.

2.  Creazione di un Nuovo Ramo:

`git checkout -b nome_del_ramo`

3.  Elenca e Cambia Rami:

`git branch`            Elenca tutti i rami presenti

`git checkout ramo`     Cambia al ramo specificato


4.  Merge di Rami:
Una volta che hai sviluppato una nuova funzionalità in un ramo separato, puoi unire (merge) le modifiche nel ramo principale.

`git checkout nome_del_ramo_destinazione`

`git merge nome_del_ramo_sorgente`

5.  Cancellazione di un Ramo:

`git branch -d nome_del_ramo`

Questo comando elimina il ramo specificato. Assicurati di essere su un altro ramo prima di cancellare il ramo corrente.

6.  Ramo Remoto:
I rami possono anche essere presenti su repository remoti. Puoi clonare un repository remoto e lavorare su rami remoti o puoi spingere i tuoi rami locali su un repository remoto.
I rami offrono un modo flessibile per gestire lo sviluppo in modo organizzato e collaborativo.

Puoi sperimentare su un ramo senza influenzare il ramo principale e unire le modifiche solo quando sei pronto. Questa pratica agevola lo sviluppo in team e contribuisce a una cronologia delle versioni più pulita.

## Mi spieghi --global?
L'opzione --global in Git viene utilizzata per specificare che una determinata configurazione si applica globalmente a tutti i repository sul tuo sistema.
Quando usi --global, stai configurando le impostazioni per il tuo utente su tutto il sistema e non solo per un repository specifico.

## Quali sono i comandi principali?

Infine, ecco alcuni dei comandi principali di Git che ti saranno utili durante lo sviluppo:

`git init`: Inizializza un nuovo repository Git nella directory corrente.

`git clone <url>`: Clona un repository remoto nella tua macchina locale.

`git add <file>`: Aggiunge un file o modifiche specifiche ai file all'area di staging in preparazione per il commit.

`git commit -m "Messaggio del commit"`: Registra le modifiche all'area di staging nel repository con un messaggio descrittivo.

`git status`: Mostra lo stato delle modifiche come file non monitorati, modificati o pronti per il commit.

`git pull`: Recupera i cambiamenti dal repository remoto e li integra nel tuo ramo locale.

`git push`: Invia i tuoi commit al repository remoto.

`git branch`: Mostra l'elenco dei rami e indica su quale ramo ti trovi.

`git checkout <branch>`: Passa a un altro ramo.

`git merge <branch>`: Unisce le modifiche di un altro ramo nel ramo corrente.

`git log`: Mostra la cronologia dei commit con i relativi hash, autori e messaggi.

`git diff`: Mostra le differenze non ancora commesse tra il tuo lavoro corrente e l'ultima versione commit.

`git remote -v`: Mostra l'elenco dei repository remoti collegati al tuo repository locale.

`git rm <file>`: Rimuove un file dal repository e dalla tua area di lavoro.

`git stash`: Salva temporaneamente le modifiche non commesse in modo da poter cambiare ramo senza committare.

`git reset --hard origin/main`: Per resettare il profilo locale.

Questi sono solo alcuni dei comandi di base. Git offre molte altre funzionalità avanzate che puoi esplorare man mano che acquisisci familiarità con il sistema di controllo versione. Puoi ottenere ulteriori informazioni sui comandi utilizzando git --help o consultando la documentazione di Git.
