-- Start the SQL transaction
BEGIN;

    -- Insert cinemas
    INSERT INTO cinemas ("name", "adress", "postalCode", "city", "phoneNumber", "openHour", "closeHour") VALUES
        ('Cinéphoria Nantes', '25, avenue du Breton', 44000, 'Nantes', '06 45 89 53 21', '08:00:00', '23:30:00'),
        ('Cinéphoria Bordeaux', '154, rue du bordeleaux', 33000, 'Bordeaux', '06 32 65 45 12', '08:20:00', '23:50:00'),
        ('Cinéphoria Paris', '356, avenue de Napoléon', 75001, 'Paris', '01 56 99 21 44', '07:00:00', '23:20:00'),
        ('Cinéphoria Toulouse', '5, rue de la ville rose', 31000, 'Toulouse', '05 32 11 91 73', '09:00:00', '23:30:00'),
        ('Cinéphoria Lille', '239, avenue du Nord', 59000, 'Lille', '06 32 87 12 97', '08:30:00', '23:10:00'),
        ('Cinéphoria Charleroi', '654, rue du belge', 6000, 'Charleroi', '07 65 99 21 65', '09:00:00', '22:30:00'),
        ('Cinéphoria Liège', '1213, avenue du chocolat noir', 4000, 'Liège', '06 99 56 22 87', '10:00:00', '23:30:00');
    -- Insert cinemas

    SAVEPOINT cinemas_savepoint;

    -- Insert categories
    INSERT INTO categories ("name") VALUES
        ('Action'),
        ('Aventure'),
        ('Drame'),
        ('Horreur'),
        ('Comédie');
    -- Insert categories

    SAVEPOINT categories_savepoint;

    -- Insert movies
    INSERT INTO movies ("title", "description", "minimumAge", "favorite", "imageURL", "categoryId") VALUES
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
    -- Insert movies

    SAVEPOINT movies_savepoint;

    -- Insert ratings
    INSERT INTO ratings ("number", "description", "movieId") VALUES
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
    -- Insert ratings

    SAVEPOINT ratings_savepoint;

    -- Insert halls
    INSERT INTO halls ("number", "projectionQuality", "cinemaId") VALUES
        (1, 'HD', 1),
        (2, '4K', 1),
        (3, 'SD', 1),
        (4, 'HD', 1),
        (5, 'HD', 1),
        (6, '4K', 1),
        (1, 'SD', 2),
        (2, 'HD', 2),
        (3, '4K', 2),
        (4, 'SD', 2),
        (5, '4K', 2),
        (6, 'SD', 2),
        (1, 'SD', 3),
        (2, 'HD', 3),
        (3, '4K', 3),
        (4, 'SD', 3),
        (5, '4K', 3),
        (6, 'SD', 3),
        (1, 'SD', 4),
        (2, 'HD', 4),
        (3, '4K', 4),
        (4, 'SD', 4),
        (5, '4K', 4),
        (6, 'SD', 4),
        (1, 'SD', 5),
        (2, 'HD', 5),
        (3, '4K', 5),
        (4, 'SD', 5),
        (5, '4K', 5),
        (6, 'SD', 5),
        (1, 'SD', 6),
        (2, 'HD', 6),
        (3, '4K', 6),
        (4, 'SD', 6),
        (5, '4K', 6),
        (6, 'SD', 6),
        (1, 'SD', 7),
        (2, 'HD', 7),
        (3, '4K', 7),
        (4, 'SD', 7),
        (5, '4K', 7),
        (6, 'SD', 7);
    -- Insert halls

    SAVEPOINT halls_savepoint;

    -- Insert showtimes
    INSERT INTO showtimes ("startTime", "endTime", "price", "movieId", "hallId") VALUES
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 1, 1),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 1, 7),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 1, 13),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 1, 19),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 1, 25),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 2, 31),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 2, 37),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 2, 2),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 2, 8),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 2, 14),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 2, 20),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 3, 26),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 3, 32),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 3, 38),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 3, 3),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 3, 9),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 3, 15),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 4, 21),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 4, 27),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 4, 33),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 4, 39),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 4, 4),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 4, 10),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 5, 16),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 5, 22),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 5, 28),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 5, 34),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 5, 40),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 5, 5),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 6, 11),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 6, 17),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 6, 23),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 6, 29),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 6, 35),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 6, 41),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 7, 6),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 7, 12),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 7, 18),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 7, 24),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 7, 30),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 7, 36),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 8, 42),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 8, 1),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 8, 7),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 8, 13),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 8, 19),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 8, 25),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 9, 31),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 9, 37),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 9, 2),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 9, 8),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 9, 14),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 9, 20),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 10, 26),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 10, 32),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 10, 38),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 10, 3),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 10, 9),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 10, 15),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 11, 21),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 11, 27),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 11, 33),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 11, 39),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 11, 4),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 11, 10),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 12, 16),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 12, 22),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 12, 28),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 12, 34),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 12, 40),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 12, 5),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 13, 11),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 13, 17),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 13, 23),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 13, 29),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 13, 35),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 13, 41),
        ('2024-11-20 14:00:00', '2024-11-20 16:00:00', 12, 14, 6),
        ('2024-11-21 18:00:00', '2024-11-21 20:00:00', 15, 14, 12),
        ('2024-11-22 14:00:00', '2024-11-22 16:00:00', 12, 14, 18),
        ('2024-11-23 18:00:00', '2024-11-23 20:00:00', 15, 14, 24),
        ('2024-11-24 14:00:00', '2024-11-24 16:00:00', 12, 14, 30),
        ('2024-11-25 18:00:00', '2024-11-25 20:00:00', 15, 14, 36),
        ('2024-11-25 20:20:00', '2024-11-25 22:20:00', 15, 14, 42);
    -- Insert showtimes

    SAVEPOINT showtimes_savepoint;

-- Commit if successful
COMMIT;