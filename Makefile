# initialise l'application
init:
	cd front && npm i
	cd back && composer install

# lance le back end
launch-back:
	cd back && php sabo serve

# lance le front avec la possibilité de liaison d'appareils multiple ouvert
launch-front-host:
	cd front && npm run dev-host

# lance le front
launch-front:
	cd front && npm run dev

# lance le projet
launch-app:
	make launch-front & 
	make launch-back &

# lance le projet avec la possibilité de liaison d'appareils multiple ouvert
launch-app-host: 
	make launch-front-host & 
	make launch-back &
