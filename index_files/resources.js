define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resources = (function () {
        function Resources() {
        }
        return Resources;
    }());
    Resources.Views = {
        index: {
            header: "Willkommen im CareCenter Dokumenten Portal",
            headerCaption: "Weiter zur Anmeldung",
            patientenButtonCaption: "Patienten",
            arztButtonCaption: "Arzt",
        },
        login: {
            labelArztLogin: "Benutzer (Arzt E-Mail)",
            labelPatientenLogin: "Benutzer (Patienten E-Mail)",
            labelPassword: "Passwort",
            buttonLogin: "Anmelden",
            labelLostPassword: "Passwort vergessen?",
            labelDescription: "Wir unterstützen aus Sicherheitsgründen nur zweifach gesicherte Anmeldungen. Sie bekommen daher nach der Anmeldung an die uns bekanntgegebene Mobiltelefonnummer eine SMS mit einem 6-stelligen Zahlencode, den Sie am nächsten Bildschirm eingeben müssen. Dieser Code gilt nur einmal und nur für die Anmeldung innerhalb der nächsten 5 Minuten."
        },
        doctor: {
            headerSearchBySSN: "Patient anzeigen",
            labelSSN: "Sozialversicherungsnummer",
            arzt: "Arzt",
            buttonSearchBySSN: "Anzeigen",
            headerSearchByDateFrom: "Von heute zurückliegend",
            button1week: "1 Woche",
            button2weeks: "2 Wochen",
            button3weeks: "3 Wochen",
            button4weeks: "4 Wochen",
            headerSearchByTimeSpan: "Zeitraum auswählen",
            labelFrom: "von",
            labelTo: "bis",
            buttonSearchByTimeSpan: "Los"
        },
        download: {
            labelFileIsPreparing: "Ihre Befunde werden vorbereitet...",
            labelDownloadWillStartAutomatically: "Sie werden automatisch weitergeleitet, sobald diese fertig sind.",
            labelIfDownloadWontStart: "Falls der Download nicht in ein paar Sekunden startet, klicken Sie ",
            labelDownloadLink: "HIER"
        },
        footer: {
            box1line1: "Pilzambulatorium Schlösselgasse",
            box1line2: "1080 Wien, Schlösselgasse 19",
            box1line3: "Telefon 408 08 81, Fax 408 08 816",
            box1line4: "Mo–Fr 9.00–12.00, Di + Do auch 16.00–19.00 Uhr",
            box1line5: "Stuhlabgabe Mo–Fr 8.00–12.00 Uhr",
            box1line6: "keine Voranmeldung",
            box2line1: "Pilzambulatorium Hietzing",
            box2line2: "1130 Wien, Lainzer Straße 58",
            box2line3: "Telefon 877 00 57, Fax 877 00 576",
            box2line4: "Mo, Mi, Fr 16.00–19.00, Di + Do 9.00–12.00 Uhr",
            box2line5: "keine Voranmeldung",
            box2line6: "",
            box3line1: "Pilzambulatorium Floridsdorf",
            box3line2: "1210 Wien, Franz Jonas-Platz 8, Stiege 2, 3. Stock",
            box3line3: "Telefon 270 76 60, Fax 270 76 60 9",
            box3line4: "Mo, Mi 16:00–19:00, Di, Do, Fr 9:00–12:00 Uhr",
            box3line5: "keine Voranmeldung",
            box3line6: ""
        },
        password: {
            header: "Passwort zurücksetzen",
            description: "Geben Sie Ihre E-Mail Adresse ein und klicken Sie auf \"Zurücksetzen\". Sie erhalten eine E-Mail mit einem Link, mit dem Sie Ihr Passwort zurücksetzen können.",
            labelEmail: "E-Mail",
            resetLinkSent: "Der Link um Ihr Passwort zurückzusetzen, wurde an Ihre E-Mail versendet.",
            buttonSend: "Zurücksetzen",
        },
        passwordReset: {
            labelVerifying: "Code Überprüfung, bitte warten",
            labelNewPassword: "Neues Passwort",
            labelNewPassword2: "Neues Passwort (Bestätigung)",
            labelSmsCode: "SMS Code",
            buttonChangePassword: "Neues Passwort Sichern",
            labelPasswordChanged: "Das Passwort wurde erfolgreich geändert!",
            loginBtnCaption: "Zur Login Seite",
            labelPasswordRequirements: "Hinweis: Das Password muss mindestens 6 Zeichen lang sein",
        },
        patient: {
            header: "Befunde für",
            labelNoDocumentsFound: "Es wurden keine Dokumente gefunden.",
            labelLoading: "Laden",
            labelSelectDocuments: "Markieren Sie die Befunde, die Sie herunterladen wollen",
            tableDate: "Datum (DD-MM-YYYY)",
            tableTitle: "Titel",
            tableOther: "Zusatz",
            labelSelectedNumber: "Sie haben ",
            labelFrom: " von ",
            labelFindings: "Befunden ausgewählt",
            buttonDownload: "Herunterladen"
        },
        results: {
            labelLoading: "Laden",
            labelNoDocuments: "Keine Dokumente konnten mit Ihren Suchkriterien gefunden werden.",
            labelSelectDocuments: "Markieren Sie die Befunde, die Sie herunterladen wollen",
            tableDate: "Datum (DD-MM-YYYY)",
            tableTitle: "Titel",
            tableOther: "Zusatz",
            buttonDownload: "Herunterladen"
        },
        tfa: {
            labelDescription: "Sie sollten in wenigen Augenblicken eine SMS mit einem 6-stelligen Code an die von Ihnen angegebene Mobiltelefonnummer bekommen. Bitte geben Sie diesen Code innerhalb der nächsten 5 Minuten hier ein.",
            labelCode: "Code",
            buttonVerify: "Überprüfen"
        }
    };
    Resources.ViewModels = {
        doctor: {
            validationSSNEmpty: "Bitte befüllen Sie mindestens ein Suchfeld."
        },
        index: {
            successfullyLoggedOut: "Sie wurden erfolgreich abgemeldet."
        },
        login: {
            validationUsernameEmpty: "Der Benutzername darf nicht leer sein.",
            validationPasswordEmpty: "Das Passwort darf nicht leer sein."
        },
        tfa: {
            validationCodeEmpty: "Der Code darf nicht leer sein.",
            validationNoIdentitySession: "Keine aktuelle Sitzung gefunden. Bitte gehen Sie zur Login Seite und versuchen Sie es erneut."
        },
        password: {
            validationEmailEmpty: "Bitte geben Sie eine E-Mail Adresse ein",
        },
        passwordReset: {
            noResetCode: "Der Code wurde in der URL nicht gefunden. Bitte klicken Sie den Link zum Passwort zurücksetzen in Ihrer E-Mail",
            validationFieldEmpty: "Bitte füllen Sie alle Felder aus!",
            validationPasswordsDontMatch: "Beide eingegebenen Passwörter müssen ident sein!",
            passwordTooShort: "Das Password muss mindestens 6 zeichen lang sein!",
        }
    };
    exports.Resources = Resources;
});
