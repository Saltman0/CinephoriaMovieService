-- Start the SQL transaction
BEGIN;

    -- Insert categorie
    INSERT INTO "category" ("name") VALUES
        ('Action'),
        ('Aventure'),
        ('Drame'),
        ('Horreur'),
        ('Comédie');
    -- Insert categorie

    SAVEPOINT category_savepoint;

    -- Insert movie
    INSERT INTO "movie" ("title", "description", "minimumAge", "favorite", "imageURL", "categoryId") VALUES
        ('Mon voisin Totoro', 'Deux petites filles, Mei et Satsuki, viennent s''installer avec leur père dans une grande maison à la campagne afin de se rapprocher de l''hôpital où séjourne leur mère. Elles vont découvrir l''existence de leurs nouveaux voisins, invisible aux yeux des autres humains, des créatures merveilleuses, mais très discrètes : Grand Totoro, Moyen Totoro (Chū-Totoro) et Petit Totoro (Chibi-Totoro). Avec son ventre rebondi, Totoro est un être rare et fascinant, un esprit de la forêt... Il se nourrit de glands et de noix. Il peut voler, se déplacer en « Chat-Bus ». Il dort le jour, mais les nuits de pleine lune, il aime jouer avec des ocarinas magiques...', NULL, false, 'pasEncoreLeLien0', 2),
        ('Avengers : Infinity War', 'Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.', 12, false, 'pasEncoreLeLien1', 1),
        ('Dune : deuxième partie', 'Paul Atreides s’unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il se trouve confronté au plus grand des dilemmes : choisir entre l’amour de sa vie et le destin de l’univers.', 14, false, 'pasEncoreLeLien2', 1),
        ('Interstellar', 'Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.', NULL, true, 'pasEncoreLeLien3', 2),
        ('La liste de Schindler', 'Evocation des années de guerre d''Oskar Schindler, fils d''industriel d''origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver huit cents hommes et trois cents femmes du camp d''extermination de Auschwitz-Birkenau.', 18, false, 'pasEncoreLeLien4', 4),
        ('Le Bon, la brute et le truand', 'Pendant la Guerre de Sécession, trois hommes, préférant s''intéresser à leur profit personnel, se lancent à la recherche d''un coffre contenant 200 000 dollars en pièces d''or volés à l''armée sudiste. Tuco sait que le trésor se trouve dans un cimetière, tandis que Joe connaît le nom inscrit sur la pierre tombale qui sert de cache. Chacun a besoin de l''autre. Mais un troisième homme entre dans la course : Setenza, une brute qui n''hésite pas à massacrer femmes et enfants pour parvenir à ses fins.', 16, false, 'pasEncoreLeLien5', 1),
        ('Le Parrain', 'En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone, parrain de cette famille, marie sa fille à un bookmaker. Sollozzo, parrain de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe. Michael, le frère cadet de Sonny, recherche alors les commanditaires de l''attentat et tue Sollozzo et le chef de la police, en représailles. Michael part alors en Sicile, où il épouse Apollonia, mais celle-ci est assassinée à sa place. De retour à New York, Michael épouse Kay Adams et se prépare à devenir le successeur de son père...', 18, false, 'pasEncoreLeLien6', 3),
        ('Le Roi Lion', 'Sur les Hautes terres d''Afrique règne un lion tout-puissant, le roi Mufasa, que tous les hôtes de la jungle respectent et admirent pour sa sagesse et sa générosité. Son jeune fils Simba sait qu''un jour il lui succédera, conformément aux lois universelles du cycle de la vie, mais il est loin de deviner les épreuves et les sacrifices que lui imposera l''exercice du pouvoir. Espiègle, naïf et turbulent, le lionceau passe le plus clair de son temps à jouer avec sa petite copine Nala et à taquiner Zazu, son digne précepteur. Son futur royaume lui apparaît en songe comme un lieu enchanté où il fera bon vivre, s''amuser et donner des ordres. Cependant, l''univers de Simba n''est pas aussi sûr qu''il le croie. Scar, le frère de Mufasa, aspire en effet depuis toujours au trône. Maladivement jaloux de son aîné, il intrigue pour l''éliminer en même temps que son successeur...', NULL, false, 'pasEncoreLeLien7', 2),
        ('Le Seigneur des anneaux : Le retour du Roi', 'Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n''a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d''accomplir sa destinée ? Tandis que Gandalf s''efforce de soutenir les forces brisées de Gondor, Théoden exhorte les guerriers de Rohan à se joindre au combat...', 12, false, 'pasEncoreLeLien8', 2),
        ('Moi, Moche et Méchant 4', 'Gru, Lucy et les filles, Margo, Edith et Agnès accueillent le petit dernier de la famille, Gru Junior, qui semble n''avoir qu''une passion : faire tourner son père en bourrique. Mais Gru est confronté à un nouvel ennemi Maxime Le Mal qui, avec l''aide de sa petite amie, la fatale Valentina, va obliger toute la famille à fuir.', NULL, true, 'pasEncoreLeLien9', 5),
        ('Spider-man 3', 'Peter Parker a enfin réussi à concilier son amour pour Mary-Jane et ses devoirs de super-héros. Mais l''horizon s''obscurcit. La brutale mutation de son costume, qui devient noir, décuple ses pouvoirs et transforme également sa personnalité...', NULL, true, 'pasEncoreLeLien10', 1),
        ('Star Wars III : La Revanche des Sith', 'La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d''un pouvoir sans précédent, tenté par le côté obscur de la Force...', 10, true, 'pasEncoreLeLien11', 1),
        ('The Dark Knight : Le Chevalier Noir', 'Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l''appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville...', 10, true, 'pasEncoreLeLien12', 1),
        ('Vice-versa', 'Au Quartier Général, le centre de contrôle situé dans la tête de la petite Riley, 11 ans, cinq Émotions sont au travail. À leur tête, Joie, débordante d''optimisme et de bonne humeur, veille à ce que Riley soit heureuse. Peur se charge de la sécurité...', NULL, false, 'pasEncoreLeLien13', 2);
    -- Insert movie

    SAVEPOINT movie_savepoint;

    -- Insert rating
    INSERT INTO "rating" ("number", "description", "movieId") VALUES
        (5, 'Super film, je vous le recommande !', 1),
        (4, 'Un bon film.', 1),
        (3, 'C''était pas mal, sans plus.', 2),
        (2, 'Bof, pas terrible', 2),
        (1, 'Je n''ai pas du tout apprécié le film.', 3),
        (5, 'Incroyable comme film', 3),
        (3, 'Mouais.', 4),
        (3, 'Il a ces moments.', 4),
        (5, 'Super !', 5),
        (5, 'Incroyable !', 5),
        (1, 'Horrible film !', 6),
        (4, 'C''était bien !', 6),
        (2, 'Euh j''ai pas compris...', 7),
        (3, 'Sympa.', 7),
        (2, 'Je ne sais pas trop quoi penser...', 8),
        (3, 'Bon film dans son ensemble.', 8),
        (1, 'Pire film que j''ai vu de ma vie.', 9),
        (1, 'Un mauvais film.', 9),
        (3, 'J''ai bien aimé.', 10),
        (3, 'C''est pas mon genre de films, mais c''est ok.', 10),
        (5, 'C''était génial, excellent film !', 11),
        (5, 'Excellent film.', 11),
        (5, 'Un film exceptionnel.', 12),
        (5, 'Quel film incroyable !', 13),
        (5, 'Très émouvant !', 14);
    -- Insert rating

    SAVEPOINT rating_savepoint;

-- Commit if successful
COMMIT;