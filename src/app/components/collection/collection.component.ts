import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Club } from '../../modles/Clubs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  clubs: Club[];

  constructor() {

   }

  ngOnInit() {
    this.clubs =
    [
            {
            logo: 'Tottenham Hotspur.png',
            name: 'Tottenham Hotspur',
            ground: 'Wembley Stadium',
            location: 'London',
            capacity: 90000,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Manchester United.png',
            name: 'Manchester United',
            ground: 'Old Trafford',
            location: 'Manchester',
            capacity: 75653,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Arsenal.png',
            name: 'Arsenal',
            ground: 'Emirates Stadium',
            location: 'London',
            capacity: 60260,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'West Ham United.png',
            name: 'West Ham United',
            ground: 'Olympic Stadium',
            location: 'London',
            capacity: 60000,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Manchester City.png',
            name: 'Manchester City',
            ground: 'Etihad Stadium',
            location: 'Manchester',
            capacity: 55097,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Liverpool.png',
            name: 'Liverpool',
            ground: 'Anfield',
            location: 'Liverpool',
            capacity: 54074,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Newcastle United.png',
            name: 'Newcastle United',
            ground: 'St James\' Park',
            location: 'Newcastle upon Tyne',
            capacity: 52338,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Sunderland.png',
            name: 'Sunderland',
            ground: 'Stadium of Light',
            location: 'Sunderland',
            capacity: 48707,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Aston Villa.png',
            name: 'Aston Villa',
            ground: 'Villa Park',
            location: 'Birmingham',
            capacity: 42660,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Chelsea.png',
            name: 'Chelsea',
            ground: 'Stamford Bridge',
            location: 'London',
            capacity: 41798,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Sheffield Wednesday.png',
            name: 'Sheffield Wednesday',
            ground: 'Hillsborough Stadium',
            location: 'Sheffield',
            capacity: 39732,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Everton.png',
            name: 'Everton',
            ground: 'Goodison Park',
            location: 'Liverpool',
            capacity: 39571,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Leeds United.png',
            name: 'Leeds United',
            ground: 'Elland Road',
            location: 'Leeds',
            capacity: 37890,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Tottenham Hotspur.png',
            name: 'Tottenham Hotspur',
            ground: 'White Hart Lane',
            location: 'London',
            capacity: 36284,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Middlesbrough.png',
            name: 'Middlesbrough',
            ground: 'Riverside Stadium',
            location: 'Middlesbrough',
            capacity: 34988,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Derby County.png',
            name: 'Derby County',
            ground: 'Pride Park Stadium',
            location: 'Derby',
            capacity: 33597,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Cardiff City.png',
            name: 'Cardiff City',
            ground: 'Cardiff City Stadium',
            location: 'Cardiff',
            capacity: 33280,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Sheffield United.png',
            name: 'Sheffield United',
            ground: 'Bramall Lane',
            location: 'Sheffield',
            capacity: 32702,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Southampton.png',
            name: 'Southampton',
            ground: 'St Mary\'s Stadium',
            location: 'Southampton',
            capacity: 32505,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Coventry City.png',
            name: 'Coventry City',
            ground: 'Ricoh Arena',
            location: 'Coventry',
            capacity: 32500,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Leicester City.png',
            name: 'Leicester City',
            ground: 'King Power Stadium',
            location: 'Leicester',
            capacity: 32312,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Wolverhampton Wanderers.png',
            name: 'Wolverhampton Wanderers',
            ground: 'Molineux',
            location: 'Wolverhampton',
            capacity: 31700,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Blackburn Rovers.png',
            name: 'Blackburn Rovers',
            ground: 'Ewood Park',
            location: 'Blackburn',
            capacity: 31154,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Brighton & Hove Albion.png',
            name: 'Brighton & Hove Albion',
            ground: 'Falmer Stadium',
            location: 'Brighton',
            capacity: 30750,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Nottingham Forest.png',
            name: 'Nottingham Forest',
            ground: 'City Ground',
            location: 'Nottingham',
            capacity: 30576,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Milton Keynes Dons.png',
            name: 'Milton Keynes Dons',
            ground: 'Stadium mk',
            location: 'Milton Keynes',
            capacity: 30500,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Ipswich Town.png',
            name: 'Ipswich Town',
            ground: 'Portman Road',
            location: 'Ipswich',
            capacity: 30311,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Birmingham City.png',
            name: 'Birmingham City',
            ground: 'St Andrew\'s',
            location: 'Birmingham',
            capacity: 30016,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Bolton Wanderers.png',
            name: 'Bolton Wanderers',
            ground: 'Macron Stadium',
            location: 'Bolton',
            capacity: 28723,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Stoke City.png',
            name: 'Stoke City',
            ground: 'Bet365 Stadium',
            location: 'Stoke-on-Trent',
            capacity: 27740,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Norwich City.png',
            name: 'Norwich City',
            ground: 'Carrow Road',
            location: 'Norwich',
            capacity: 27224,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Charlton Athletic.png',
            name: 'Charlton Athletic',
            ground: 'The Valley',
            location: 'London',
            capacity: 27111,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Bristol City.png',
            name: 'Bristol City',
            ground: 'Ashton Gate Stadium',
            location: 'Bristol',
            capacity: 27000,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'West Bromwich Albion.png',
            name: 'West Bromwich Albion',
            ground: 'The Hawthorns',
            location: 'West Bromwich',
            capacity: 26850,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Fulham.png',
            name: 'Fulham',
            ground: 'Craven Cottage',
            location: 'London',
            capacity: 25678,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Hull City.png',
            name: 'Hull City',
            ground: 'KCOM Stadium',
            location: 'Kingston upon Hull',
            capacity: 25586,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Bradford City.png',
            name: 'Bradford City',
            ground: 'Valley Parade',
            location: 'Bradford',
            capacity: 25136,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Crystal Palace.png',
            name: 'Crystal Palace',
            ground: 'Selhurst Park',
            location: 'London',
            capacity: 25073,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Wigan Athletic.png',
            name: 'Wigan Athletic',
            ground: 'DW Stadium',
            location: 'Wigan',
            capacity: 25023,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Huddersfield Town.png',
            name: 'Huddersfield Town',
            ground: 'Kirklees Stadium',
            location: 'Huddersfield',
            capacity: 24500,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Reading.png',
            name: 'Reading',
            ground: 'Madejski Stadium',
            location: 'Reading',
            capacity: 24161,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Preston North End.png',
            name: 'Preston North End',
            ground: 'Deepdale',
            location: 'Preston',
            capacity: 23408,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Barnsley.png',
            name: 'Barnsley',
            ground: 'Oakwell',
            location: 'Barnsley',
            capacity: 23009,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Watford.png',
            name: 'Watford',
            ground: 'Vicarage Road',
            location: 'Watford',
            capacity: 21438,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Burnley.png',
            name: 'Burnley',
            ground: 'Turf Moor',
            location: 'Burnley',
            capacity: 21401,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Swansea City.png',
            name: 'Swansea City',
            ground: 'Liberty Stadium',
            location: 'Swansea',
            capacity: 20909,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Portsmouth.png',
            name: 'Portsmouth',
            ground: 'Fratton Park',
            location: 'Portsmouth',
            capacity: 20700,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Notts County.png',
            name: 'Notts County',
            ground: 'Meadow Lane',
            location: 'Nottingham',
            capacity: 20300,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Millwall.png',
            name: 'Millwall',
            ground: 'The Den',
            location: 'London',
            capacity: 20146,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Plymouth Argyle.png',
            name: 'Plymouth Argyle',
            ground: 'Home Park',
            location: 'Plymouth',
            capacity: 19500,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Port Vale.png',
            name: 'Port Vale',
            ground: 'Vale Park',
            location: 'Stoke-on-Trent',
            capacity: 18947,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Queens Park Rangers.png',
            name: 'Queens Park Rangers',
            ground: 'Loftus Road',
            location: 'London',
            capacity: 18489,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Carlisle United.png',
            name: 'Carlisle United',
            ground: 'Brunton Park',
            location: 'Carlisle',
            capacity: 18202,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Blackpool.png',
            name: 'Blackpool',
            ground: 'Bloomfield Road',
            location: 'Blackpool',
            capacity: 17338,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Tranmere Rovers.png',
            name: 'Tranmere Rovers',
            ground: 'Prenton Park',
            location: 'Birkenhead',
            capacity: 16587,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Swindon Town.png',
            name: 'Swindon Town',
            ground: 'County Ground',
            location: 'Swindon',
            capacity: 15728,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Doncaster Rovers.png',
            name: 'Doncaster Rovers',
            ground: 'Keepmoat Stadium',
            location: 'Doncaster',
            capacity: 15231,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Peterborough United.png',
            name: 'Peterborough United',
            ground: 'London Road',
            location: 'Peterborough',
            capacity: 14319,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Oldham Athletic.png',
            name: 'Oldham Athletic',
            ground: 'Boundary Park',
            location: 'Oldham',
            capacity: 13309,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Liverpool.png',
            name: 'Liverpool Ladies',
            ground: 'Select Security Stadium',
            location: 'Widnes',
            capacity: 13350,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Brentford.png',
            name: 'Brentford',
            ground: 'Griffin Park',
            location: 'London',
            capacity: 12763,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Oxford United.png',
            name: 'Oxford United',
            ground: 'Kassam Stadium',
            location: 'Oxford',
            capacity: 12500,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Southend United.png',
            name: 'Southend United',
            ground: 'Roots Hall',
            location: 'Southend',
            capacity: 12392,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Bristol Rovers.png',
            name: 'Bristol Rovers',
            ground: 'Memorial Stadium',
            location: 'Bristol',
            capacity: 12300,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Rotherham.png',
            name: 'Rotherham',
            ground: 'New York Stadium',
            location: 'Rotherham',
            capacity: 12021,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Gateshead.png',
            name: 'Gateshead',
            ground: 'Gateshead International Stadium',
            location: 'Gateshead',
            capacity: 11800,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Bury.png',
            name: 'Bury',
            ground: 'Gigg Lane',
            location: 'Bury',
            capacity: 11640,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Gillingham.png',
            name: 'Gillingham',
            ground: 'Priestfield Stadium',
            location: 'Gillingham',
            capacity: 11582,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'AFC Bournemouth.png',
            name: 'AFC Bournemouth',
            ground: 'Dean Court',
            location: 'Bournemouth',
            capacity: 11464,
            league: 'Premier League',
            color: 'Premier-League'
          },
          {
            logo: 'Walsall.png',
            name: 'Walsall',
            ground: 'Bescot Stadium',
            location: 'Walsall',
            capacity: 11300,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Stockport County.png',
            name: 'Stockport County',
            ground: 'Edgeley Park',
            location: 'Stockport',
            capacity: 10832,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Halifax Town.png',
            name: 'Halifax Town',
            ground: 'The Shay',
            location: 'Halifax',
            capacity: 10561,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Wrexham.png',
            name: 'Wrexham',
            ground: 'Racecourse Ground',
            location: 'Wrexham',
            capacity: 10500,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Chesterfield.png',
            name: 'Chesterfield',
            ground: 'Proact Stadium',
            location: 'Chesterfield',
            capacity: 10400,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Luton Town.png',
            name: 'Luton Town',
            ground: 'Kenilworth Road',
            location: 'Luton',
            capacity: 10356,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Wycombe Wanderers.png',
            name: 'Wycombe Wanderers',
            ground: 'Adams Park',
            location: 'Wycombe',
            capacity: 10300,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Rochdale.png',
            name: 'Rochdale',
            ground: 'Spotland',
            location: 'Rochdale',
            capacity: 10249,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Lincoln City.png',
            name: 'Lincoln City',
            ground: 'Sincil Bank',
            location: 'Lincoln',
            capacity: 10130,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Colchester United.png',
            name: 'Colchester United',
            ground: 'Colchester Community Stadium',
            location: 'Colchester',
            capacity: 10105,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Crewe Alexandra.png',
            name: 'Crewe Alexandra',
            ground: 'Alexandra Stadium',
            location: 'Crewe',
            capacity: 10066,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Mansfield Town.png',
            name: 'Mansfield Town',
            ground: 'Field Mill',
            location: 'Mansfield',
            capacity: 10000,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Shrewsbury Town.png',
            name: 'Shrewsbury Town',
            ground: 'Greenhous Meadow',
            location: 'Shrewsbury',
            capacity: 9875,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Yeovil Town.png',
            name: 'Yeovil Town',
            ground: 'Huish Park',
            location: 'Yeovil',
            capacity: 9665,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Cambridge United.png',
            name: 'Cambridge United',
            ground: 'Abbey Stadium',
            location: 'Cambridge',
            capacity: 9617,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Grimsby Town.png',
            name: 'Grimsby Town',
            ground: 'Blundell Park',
            location: 'Cleethorpes',
            capacity: 9546,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Leyton Orient.png',
            name: 'Leyton Orient',
            ground: 'Brisbane Road',
            location: 'London',
            capacity: 9271,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Scunthorpe United.png',
            name: 'Scunthorpe United',
            ground: 'Glanford Park',
            location: 'Scunthorpe',
            capacity: 9183,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Bath City.png',
            name: 'Bath City',
            ground: 'Twerton Park',
            location: 'Bath',
            capacity: 8880,
            league: 'National League South'
          },
          {
            logo: 'Exeter City.png',
            name: 'Exeter City',
            ground: 'St James Park',
            location: 'Exeter',
            capacity: 8830,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'York City.png',
            name: 'York City',
            ground: 'Bootham Crescent',
            location: 'York',
            capacity: 7872,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Hartlepool United.png',
            name: 'Hartlepool United',
            ground: 'Victoria Park',
            location: 'Hartlepool',
            capacity: 7833,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Northampton Town.png',
            name: 'Northampton Town',
            ground: 'Sixfields Stadium',
            location: 'Northampton',
            capacity: 7653,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Aldershot Town.png',
            name: 'Aldershot Town',
            ground: 'Recreation Ground',
            location: 'Aldershot',
            capacity: 7100,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Cheltenham Town.png',
            name: 'Cheltenham Town',
            ground: 'Whaddon Road',
            location: 'Cheltenham',
            capacity: 7066,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Newport County.png',
            name: 'Newport County',
            ground: 'Rodney Parade',
            location: 'Newport',
            capacity: 7012,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Manchester City.png',
            name: 'Manchester City Women\'s F.C.',
            ground: 'Academy Stadium',
            location: 'Manchester',
            capacity: 7000,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Stevenage.png',
            name: 'Stevenage',
            ground: 'Broadhall Way',
            location: 'Stevenage',
            capacity: 6920,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Burton Albion.png',
            name: 'Burton Albion',
            ground: 'Pirelli Stadium',
            location: 'Burton-upon-Trent',
            capacity: 6912,
            league: 'Championship',
            color: 'Championship'
          },
          {
            logo: 'Boston United.png',
            name: 'Boston United',
            ground: 'York Street',
            location: 'Boston',
            capacity: 6643,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Torquay United.png',
            name: 'Torquay United',
            ground: 'Plainmoor',
            location: 'Torquay',
            capacity: 6500,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Stalybridge Celtic.png',
            name: 'Stalybridge Celtic',
            ground: 'Bower Fold',
            location: 'Stalybridge',
            capacity: 6500,
            league: 'Northern Premier League',
            color: 'Northern-Premier-League'
          },
          {
            logo: 'Morecambe.png',
            name: 'Morecambe',
            ground: 'Globe Arena',
            location: 'Morecambe',
            capacity: 6476,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Macclesfield Town.png',
            name: 'Macclesfield Town',
            ground: 'Moss Rose',
            location: 'Macclesfield',
            capacity: 6335,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'AFC Telford United.png',
            name: 'AFC Telford United',
            ground: 'New Bucks Head',
            location: 'Telford',
            capacity: 6300,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Kidderminster Harriers.png',
            name: 'Kidderminster Harriers',
            ground: 'Aggborough',
            location: 'Kidderminster',
            capacity: 6238,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Altrincham.png',
            name: 'Altrincham',
            ground: 'Moss Lane',
            location: 'Altrincham',
            capacity: 6085,
            league: 'Northern Premier League',
            color: 'Northern-Premier-League'
          },
          {
            logo: 'Southport.png',
            name: 'Southport',
            ground: 'Haig Avenue',
            location: 'Southport',
            capacity: 6008,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Dagenham & Redbridge.png',
            name: 'Dagenham & Redbridge',
            ground: 'Victoria Road',
            location: 'Dagenham',
            capacity: 600,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Woking.png',
            name: 'Woking',
            ground: 'Kingfield Stadium',
            location: 'Woking',
            capacity: 6000,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Basingstoke Town.png',
            name: 'Basingstoke Town',
            ground: 'The Camrose',
            location: 'Basingstoke',
            capacity: 6000,
            league: 'Southern Football League'
          },
          {
            logo: 'Farnborough.png',
            name: 'Farnborough',
            ground: 'Cherrywood Road',
            location: 'Farnborough',
            capacity: 6000,
            league: 'Southern Football League'
          },
          {
            logo: 'Crawley Town.png',
            name: 'Crawley Town',
            ground: 'Broadfield Stadium',
            location: 'Crawley',
            capacity: 5996,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Dover Athletic.png',
            name: 'Dover Athletic',
            ground: 'Crabble Athletic Ground',
            location: 'Dover',
            capacity: 5745,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Fleetwood Town.png',
            name: 'Fleetwood Town',
            ground: 'Highbury Stadium',
            location: 'Fleetwood',
            capacity: 53110,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Havant & Waterlooville.png',
            name: 'Havant & Waterlooville',
            ground: 'West Leigh Park',
            location: 'Havant',
            capacity: 52501,
            league: 'Isthmian League Premier Division'
          },
          {
            logo: 'Barnet.png',
            name: 'Barnet',
            ground: 'The Hive Stadium',
            location: 'London',
            capacity: 52332,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Eastleigh.png',
            name: 'Eastleigh',
            ground: 'Silverlake Stadium',
            location: 'Eastleigh',
            capacity: 51923,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Forest Green Rovers.png',
            name: 'Forest Green Rovers',
            ground: 'The New Lawn',
            location: 'Nailsworth',
            capacity: 51404,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Chester.png',
            name: 'Chester',
            ground: 'Deva Stadium',
            location: 'Chester',
            capacity: 51265,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Accrington Stanley.png',
            name: 'Accrington Stanley',
            ground: 'Crown Ground',
            location: 'Accrington',
            capacity: 50576,
            league: 'League Two',
            color: 'League-Two'
          },
          {
            logo: 'Sutton United.png',
            name: 'Sutton United',
            ground: 'Gander Green Lane',
            location: 'London',
            capacity: 50137,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Ebbsfleet United.png',
            name: 'Ebbsfleet United',
            ground: 'Stonebridge Road',
            location: 'Northfleet',
            capacity: 50118,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Bromley.png',
            name: 'Bromley',
            ground: 'Fortress Stadium',
            location: 'Bromley',
            capacity: 50009,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'AFC Wimbledon.png',
            name: 'AFC Wimbledon',
            ground: 'Kingsmeadow',
            location: 'London',
            capacity: 48500,
            league: 'League One',
            color: 'League-One'
          },
          {
            logo: 'Boreham Wood.png',
            name: 'Boreham Wood',
            ground: 'Meadow Park',
            location: 'Borehamwood',
            capacity: 45001,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Barrow.png',
            name: 'Barrow',
            ground: 'Holker Street',
            location: 'Barrow-in-Furness',
            capacity: 42002,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Berwick Rangers.png',
            name: 'Berwick Rangers',
            ground: 'Shielfield Park',
            location: 'Berwick-upon-Tweed',
            capacity: 41313,
            league: 'Scottish League Two'
          },
          {
            logo: 'Braintree Town.png',
            name: 'Braintree Town',
            ground: 'Cressing Road',
            location: 'Braintree',
            capacity: 41514,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Solihull Moors.png',
            name: 'Solihull Moors',
            ground: 'Damson Park',
            location: 'Solihull',
            capacity: 30505,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Maidstone United.png',
            name: 'Maidstone United',
            ground: 'Gallagher Stadium',
            location: 'Maidstone',
            capacity: 30006,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Guiseley.png',
            name: 'Guiseley',
            ground: 'Nethermoor Park',
            location: 'Guiseley',
            capacity: 30007,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Chelsea.png',
            name: 'Chelsea Ladies',
            ground: 'Wheatsheaf Park',
            location: 'Staines',
            capacity: 30098,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'North Ferriby United.png',
            name: 'North Ferriby United',
            ground: 'Grange Lane',
            location: 'North Ferriby',
            capacity: 27009,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Sunderland.png',
            name: 'Sunderland Ladies',
            ground: 'Eppleton Colliery Football Ground, The Hetton Centre',
            location: 'Hetton-le-Hole',
            capacity: 2000,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'The New Saints.png',
            name: 'The New Saints',
            ground: 'Park Hall',
            location: 'Oswestry',
            capacity: 20001,
            league: 'Welsh Premier League'
          },
          {
            logo: 'Arsenal.png',
            name: 'Arsenal Women F.C',
            ground: 'Boreham Wood',
            location: 'Hertfordshire',
            capacity: 4500,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Aston Villa.png',
            name: 'Aston Villa',
            ground: 'The Lamb',
            location: 'Tamworth',
            capacity: 4813,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Bristol City.png',
            name: 'Bristol City',
            ground: 'Stoke Gifford Stadium',
            location: 'Filton',
            capacity: 1500,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Durham.png',
            name: 'Durham',
            ground: 'New Ferens Park',
            location: 'Durham',
            capacity: 3000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Everton.png',
            name: 'Everton',
            ground: 'Halton Stadium',
            location: 'Widnes',
            capacity: 13350,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'London Bees.png',
            name: 'London Bees',
            ground: 'The Hive',
            location: 'Barnet',
            capacity: 5000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Millwall Lionesses.png',
            name: 'Millwall Lionesses',
            ground: 'The Den',
            location: 'Millwall',
            capacity: 20000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Oxford United.png',
            name: 'Oxford United',
            ground: 'The Armadillo Stadium',
            location: 'Oxford',
            capacity: 2000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Sheffield Wednesday.png',
            name: 'Sheffield',
            ground: 'Coaches and Horses',
            location: 'Dronfield',
            capacity: 2000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Watford.png',
            name: 'Watford',
            ground: 'Broadwater Stadium',
            location: 'Berkhamsted',
            capacity: 2000,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Yeovil Town.png',
            name: 'Yeovil Town',
            ground: 'Huish Park',
            location: 'Sherborne',
            capacity: 9565,
            league: 'Womens Super League Two',
            color: 'Womens-Super-League-Two'
          },
          {
            logo: 'Birmingham City.png',
            name: 'Birmingham City',
            ground: 'Damson Park',
            location: 'Solihull',
            capacity: 3050,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Bristol City.png',
            name: 'Bristol City',
            ground: 'Stoke Gifford Stadium',
            location: 'Filton',
            capacity: 1500,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Everton.png',
            name: 'Everton',
            ground: 'Select Security Stadium',
            location: 'Widnes',
            capacity: 13350,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Reading.png',
            name: 'Reading',
            ground: 'Adams Park',
            location: 'High Wycombe',
            capacity: 9617,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Yeovil Town.png',
            name: 'Yeovil Town',
            ground: 'Huish Park',
            location: 'Yeovil',
            capacity: 9565,
            league: 'Womens Super League One',
            color: 'Womens-Super-League-One'
          },
          {
            logo: 'Atalanta.png',
            name: 'Atalanta',
            ground: 'Stadio Atleti Azzurri d\'Italia',
            location: 'Bergamo',
            capacity: 26542,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Benevento.png',
            name: 'Benevento',
            ground: 'Stadio Ciro Vigorito',
            location: 'Benevento',
            capacity: 12847,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Bologna.png',
            name: 'Bologna',
            ground: 'Stadio Renato Dall\'Ara',
            location: 'Bologna',
            capacity: 38279,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Cagliari.png',
            name: 'Cagliari',
            ground: 'Stadio Sant\'Elia',
            location: 'Cagliari',
            capacity: 16233,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Chievo.png',
            name: 'Chievo',
            ground: 'Stadio Marc\'Antonio Bentegodi',
            location: 'Verona',
            capacity: 38402,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Crotone.png',
            name: 'Crotone',
            ground: 'Stadio Ezio Scida',
            location: 'Crotone',
            capacity: 16547,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Fiorentina.png',
            name: 'Fiorentina',
            ground: 'Stadio Artemio Franchi',
            location: 'Florence',
            capacity: 47282,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Genoa.png',
            name: 'Genoa',
            ground: 'Stadio Luigi Ferraris',
            location: 'Genoa',
            capacity: 36685,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Hellas Verona.png',
            name: 'Hellas Verona',
            ground: 'Stadio Marc\'Antonio Bentegodi',
            location: 'Verona',
            capacity: 38402,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Internazionale.png',
            name: 'Internazionale - Inter Milan',
            ground: 'San Siro',
            location: 'Milan',
            capacity: 80018,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Juventus.png',
            name: 'Juventus',
            ground: 'Allianz Stadium',
            location: 'Turin',
            capacity: 41507,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Lazio.png',
            name: 'Lazio',
            ground: 'Stadio Olimpico',
            location: 'Rome',
            capacity: 70634,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Milan.png',
            name: 'Milan',
            ground: 'San Siro',
            location: 'Milan',
            capacity: 80018,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Napoli.png',
            name: 'Napoli',
            ground: 'Stadio San Paolo',
            location: 'Naples',
            capacity: 60240,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Roma.png',
            name: 'Roma',
            ground: 'Stadio Olimpico',
            location: 'Rome',
            capacity: 70634,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Sampdoria.png',
            name: 'Sampdoria',
            ground: 'Stadio Luigi Ferraris',
            location: 'Genoa',
            capacity: 36685,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Sassuolo.png',
            name: 'Sassuolo',
            ground: 'Mapei Stadium – Città del Tricolore',
            location: 'Sassuolo',
            capacity: 23717,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'SPAL.png',
            name: 'SPAL',
            ground: 'Paolo Mazza',
            location: 'Ferrara',
            capacity: 12348,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Torino.png',
            name: 'Torino',
            ground: 'Stadio Olimpico Grande Torino',
            location: 'Turin',
            capacity: 27994,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Udinese.png',
            name: 'Udinese',
            ground: 'Stadio Friuli-Dacia Arena',
            location: 'Udine',
            capacity: 25144,
            league: 'Serie A',
            color: 'Serie-A'
          },
          {
            logo: 'Augsburg.png',
            name: 'Augsburg',
            ground: 'WWK Arena',
            location: 'Augsburg',
            capacity: 30660,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Bayer Leverkusen.png',
            name: 'Bayer Leverkusen',
            ground: 'BayArena',
            location: 'Leverkusen',
            capacity: 30210,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Bayern Munich.png',
            name: 'Bayern Munich',
            ground: 'Allianz Arena',
            location: 'Munich',
            capacity: 75000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Borussia Dortmund.png',
            name: 'Borussia Dortmund',
            ground: 'Signal Iduna Park',
            location: 'Dortmund',
            capacity: 81360,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Borussia Monchengladbach.png',
            name: 'Borussia Mönchengladbach',
            ground: 'Borussia-Park',
            location: 'Mönchengladbach',
            capacity: 54057,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Darmstadt 98.png',
            name: 'Darmstadt 98',
            ground: 'Jonathan-Heimes-Stadion am Böllenfalltor',
            location: 'Darmstadt',
            capacity: 17000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Eintracht Frankfurt.png',
            name: 'Eintracht Frankfurt',
            ground: 'Commerzbank-Arena',
            location: 'Frankfurt',
            capacity: 51500,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'SC Freiburg.png',
            name: 'SC Freiburg',
            ground: 'Schwarzwald-Stadion',
            location: 'Freiburg im Breisgau',
            capacity: 24000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Hamburger SV.png',
            name: 'Hamburger SV',
            ground: 'Volksparkstadion',
            location: 'Hamburg',
            capacity: 57000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Hertha BSC.png',
            name: 'Hertha BSC',
            ground: 'Olympiastadion',
            location: 'Berlin',
            capacity: 74475,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: '1899Hoffenheim.png',
            name: '1899 Hoffenheim',
            ground: 'Wirsol Rhein-Neckar-Arena',
            location: 'Sinsheim',
            capacity: 30150,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'FC Ingolstadt.png',
            name: 'FC Ingolstadt',
            ground: 'Audi Sportpark',
            location: 'Ingolstadt',
            capacity: 15000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'FC Koln.png',
            name: 'FC Köln',
            ground: 'RheinEnergieStadion',
            location: 'Cologne',
            capacity: 49968,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'RB Leipzig.png',
            name: 'RB Leipzig',
            ground: 'Red Bull Arena',
            location: 'Leipzig',
            capacity: 42959,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Mainz 05.png',
            name: 'Mainz 05',
            ground: 'Opel Arena',
            location: 'Mainz',
            capacity: 34000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Schalke 04.png',
            name: 'Schalke 04',
            ground: 'Veltins-Arena',
            location: 'Gelsenkirchen',
            capacity: 62271,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Werder Bremen.png',
            name: 'Werder Bremen',
            ground: 'Weser-Stadion',
            location: 'Bremen',
            capacity: 42100,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'VfL Wolfsburg.png',
            name: 'VfL Wolfsburg',
            ground: 'Volkswagen Arena',
            location: 'Wolfsburg',
            capacity: 30000,
            league: 'Bundesliga',
            color: 'Bundesliga'
          },
          {
            logo: 'Alfreton Town.png',
            name: 'Alfreton Town',
            ground: 'North Street',
            location: 'Alfreton',
            capacity: 3600,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Blyth Spartans.png',
            name: 'Blyth Spartans',
            ground: 'Croft Park',
            location: 'Blyth',
            capacity: 4435,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Brackley Town.png',
            name: 'Brackley Town FC',
            ground: 'St James Park, Brackley',
            location: 'Brackley',
            capacity: 3500,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Bradford Park Avenue.png',
            name: 'Bradford Park Avenue',
            ground: 'Horsfall Stadium',
            location: 'Bradford',
            capacity: 3500,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Chorley.png',
            name: 'Chorley FC',
            ground: 'Victory Park',
            location: 'Chorley',
            capacity: 4100,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Curzon Ashton.png',
            name: 'Curzon Ashton',
            ground: 'Tameside Stadium',
            location: 'Ashton-under-Lyne',
            capacity: 4000,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Darlington 1883.png',
            name: 'Darlington 1883',
            ground: 'Blackwell Meadows',
            location: 'Darlington',
            capacity: 3300,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'United of Manchester.png',
            name: 'United of Manchester',
            ground: 'Broadhurst Park',
            location: 'Manchester',
            capacity: 4400,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Gainsborough Trinity.png',
            name: 'Gainsborough Trinity',
            ground: 'The Northolme',
            location: 'Gainsborough',
            capacity: 4340,
            league: 'National League North',
            color: 'National-League North'
          },
          {
            logo: 'Harrogate Town.png',
            name: 'Harrogate Town F.C',
            ground: 'Wetherby Road',
            location: 'Harrogate',
            capacity: 2800,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Leamington.png',
            name: 'Leamington FC',
            ground: 'New Windmill Ground',
            location: 'Whitnash',
            capacity: 5000,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Nuneaton Town.png',
            name: 'Nuneaton Town',
            ground: 'Liberty Way',
            location: 'Warwickshire',
            capacity: 4500,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Salford City.png',
            name: 'Salford City FC',
            ground: 'Moor Lane',
            location: 'Salford',
            capacity: 3900,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Salford City.png',
            name: 'Salford City FC',
            ground: 'Spennymoor',
            location: 'Spennymoor',
            capacity: 3000,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Tamworth.png',
            name: 'Tamworth',
            ground: 'The Lamb Ground',
            location: 'Kettlebrook',
            capacity: 4565,
            league: 'National League North',
            color: 'National-League-North'
          },
          {
            logo: 'Bognor Regis Town.png',
            name: 'Bognor Regis Town',
            ground: 'Nyewood Lane',
            location: 'Bognor Regis',
            capacity: 4500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Chelmsford City.png',
            name: 'Chelmsford City',
            ground: 'Melbourne Stadium',
            location: 'Chelmsford',
            capacity: 3000,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Chippenham Town.png',
            name: 'Chippenham Town',
            ground: 'Hardenhuish Park',
            location: 'Chippenham',
            capacity: 3000,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Concord Rangers.png',
            name: 'Concord Rangers',
            ground: 'Thames Road',
            location: 'Canvey Island',
            capacity: 3300,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Dartford.png',
            name: 'Dartford',
            ground: 'Princes Park',
            location: 'Dartford',
            capacity: 4100,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'East Thurrock United.png',
            name: 'East Thurrock United',
            ground: 'Rookery Hill',
            location: 'Corringham',
            capacity: 3500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Eastbourne Borough.png',
            name: 'Eastbourne Borough',
            ground: 'Priory Lane',
            location: 'Langney',
            capacity: 4151,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Gloucester City.png',
            name: 'Gloucester City',
            ground: 'Evesham',
            location: 'Evesham',
            capacity: 3000,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Hampton & Richmond Borough.png',
            name: 'Hampton & Richmond Borough',
            ground: 'Beveree Stadium',
            location: 'Hampton',
            capacity: 3500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Hemel Hempstead Town.png',
            name: 'Hemel Hempstead Town',
            ground: 'Hemel Hempstead',
            location: 'Vauxhall Road',
            capacity: 3152,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Hungerford Town.png',
            name: 'Hungerford Town',
            ground: 'Bulpit Lane',
            location: 'Hungerford',
            capacity: 2500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Oxford City.png',
            name: 'Oxford City',
            ground: 'Marsh Lane',
            location: 'Marston',
            capacity: 3218,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Poole Town.png',
            name: 'Poole Town',
            ground: 'Tatnam',
            location: 'Poole',
            capacity: 2500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'St Albans City.png',
            name: 'St Albans City',
            ground: 'Clareance Park',
            location: 'St Albans',
            capacity: 6000,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Truro City.png',
            name: 'Truro City',
            ground: 'Treyew Road',
            location: 'Truro',
            capacity: 3800,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Wealdstone.png',
            name: 'Wealdstone',
            ground: 'Grosvenor Vale',
            location: 'Ruislip',
            capacity: 3607,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Welling United.png',
            name: 'Welling United',
            ground: 'Park View Road',
            location: 'Welling',
            capacity: 4000,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Weston-super-Mare.png',
            name: 'Weston-super-Mare',
            ground: 'Weston-super-Mare',
            location: 'Weston-super-Mare',
            capacity: 3500,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'Whitehawk.png',
            name: 'Whitehawk',
            ground: 'The Enclosed Ground',
            location: 'Whitehawk',
            capacity: 2175,
            league: 'National League South',
            color: 'National-League-South'
          },
          {
            logo: 'AFC Fylde.png',
            name: 'AFC Fylde',
            ground: 'Mill Farm',
            location: 'Wesham',
            capacity: 6000,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Maidenhead United.png',
            name: 'Maidenhead United',
            ground: 'York Road',
            location: 'Maidenhead',
            capacity: 4000,
            league: 'National League',
            color: 'National-League'
          },
          {
            logo: 'Alaves.png',
            name: 'Alaves',
            ground: 'Mendizorrotza',
            location: 'Vitoria-Gasteiz',
            capacity: 19840,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Athletic Bilbao.png',
            name: 'Athletic Bilbao',
            ground: 'San Mames',
            location: 'Bilbao',
            capacity: 53289,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Atletico Madrid.png',
            name: 'Atletico Madrid',
            ground: 'Wanda Metropolitano',
            location: 'Madrid',
            capacity: 67703,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Barcelona.png',
            name: 'Barcelona',
            ground: 'Camp Nou',
            location: 'Barcelona',
            capacity: 99354,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Celta Vigo.png',
            name: 'Celta Vigo',
            ground: 'Balaidos',
            location: 'Vigo',
            capacity: 29000,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Deportivo La Coruna.png',
            name: 'Deportivo La Coruna',
            ground: 'Abanca-Riazor',
            location: 'A Coruna',
            capacity: 32912,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Eibar.png',
            name: 'Eibar',
            ground: 'Ipurua',
            location: 'Eibar',
            capacity: 7083,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Espanyol.png',
            name: 'Espanyol',
            ground: 'RCDE Stadium',
            location: 'Barcelona',
            capacity: 40500,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Getafe.png',
            name: 'Getafe',
            ground: 'Coliseum Alfonso Perez',
            location: 'Getafe',
            capacity: 17000,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Girona.png',
            name: 'Girona',
            ground: 'Montilivi',
            location: 'Girona',
            capacity: 13500,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Las Palmas.png',
            name: 'Las Palmas',
            ground: 'Gran Canaria',
            location: 'Las Palmas',
            capacity: 32400,
            league: 'La Liga',
            color: 'La-Liga'
          },
          {
            logo: 'Leganes.png',
            name: 'Leganes',
            ground: 'Butarque',
            location: 'Leganes',
            capacity: 11454,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Levante.png',
  name: 'Levante',
  ground: 'Ciutat de Valencia',
  location: 'Valencia',
  capacity: 26354,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Malaga.png',
  name: 'Malaga',
  ground: 'La Rosaleda',
  location: 'Malaga',
  capacity: 30044,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Real Betis.png',
  name: 'Real Betis',
  ground: 'Benito Villamarin',
  location: 'Seville',
  capacity: 60720,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Real Madrid.png',
  name: 'Real Madrid',
  ground: 'Santiago Bernabeu',
  location: 'Madrid',
  capacity: 81044,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Real Sociedad.png',
  name: 'Real Sociedad',
  ground: 'Anoeta',
  location: 'San Sebastian',
  capacity: 32000,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Sevilla.png',
  name: 'Sevilla',
  ground: 'Ramon Sanchez Pizjuan',
  location: 'Seville',
  capacity: 42714,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Valencia.png',
  name: 'Valencia',
  ground: 'Mestalla',
  location: 'Valencia',
  capacity: 49500,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Villarreal.png',
  name: 'Villarreal',
  ground: 'Estadio de la Ceramica',
  location: 'Villarreal',
  capacity: 24890,
  league: 'La Liga',
  color: 'La-Liga'
},
{
  logo: 'Angers.png',
  name: 'Angers',
  ground: 'Angers',
  location: 'Stade Raymond Kopa',
  capacity: 17835,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Bastia.png',
  name: 'Bastia',
  ground: 'Bastia',
  location: 'Stade Armand Cesari',
  capacity: 16480,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Bordeaux.png',
  name: 'Bordeaux',
  ground: 'Bordeaux',
  location: 'Matmut Atlantique',
  capacity: 42115,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Stade Malherbe Caen.png',
  name: 'Stade Malherbe Caen',
  ground: 'Stade Malherbe Caen',
  location: 'Stade Michel d\'Ornano',
  capacity: 20453,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Dijon.png',
  name: 'Dijon',
  ground: 'Dijon',
  location: 'Stade Gaston G\ufffdrard',
  capacity: 16098,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Guingamp.png',
  name: 'Guingamp',
  ground: 'Guingamp',
  location: 'Stade du Roudourou',
  capacity: 18126,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Lille.png',
  name: 'Lille',
  ground: 'Villeneuve-d\'Ascq',
  location: 'Stade Pierre-Mauroy',
  capacity: 50186,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Lorient.png',
  name: 'Lorient',
  ground: 'Lorient',
  location: 'Stade du Moustoir',
  capacity: 18890,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Lyon.png',
  name: 'Lyon',
  ground: 'D\ufffdcines-Charpieu',
  location: 'Parc OL',
  capacity: 59186,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Marseille.png',
  name: 'Marseille',
  ground: 'Marseille',
  location: 'Stade Velodrome',
  capacity: 67381,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Metz.png',
  name: 'Metz',
  ground: 'Metz',
  location: 'Stade Saint-Symphorien',
  capacity: 25636,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Monaco.png',
  name: 'Monaco',
  ground: '\ufffdMonaco',
  location: 'Stade Louis II',
  capacity: 18500,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Montpellier.png',
  name: 'Montpellier',
  ground: 'Montpellier',
  location: 'Stade de la Mosson',
  capacity: 32939,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Nancy.png',
  name: 'Nancy',
  ground: 'Tomblaine',
  location: 'Stade Marcel Picot',
  capacity: 20087,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Nantes.png',
  name: 'Nantes',
  ground: 'Nantes',
  location: 'Stade de la Beaujoire',
  capacity: 38285,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Nice.png',
  name: 'Nice',
  ground: 'Nice',
  location: 'Allianz Riviera',
  capacity: 35624,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'PSG.png',
  name: 'PSG',
  ground: 'Paris',
  location: 'Parc des Princes',
  capacity: 48712,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Rennes.png',
  name: 'Rennes',
  ground: 'Rennes',
  location: 'Roazhon Park',
  capacity: 29376,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Saint-Etienne.png',
  name: 'Saint-Etienne',
  ground: 'Saint-Etienne',
  location: 'Stade Geoffroy-Guichard',
  capacity: 42000,
  league: 'Ligue 1',
  color: 'Ligue-1'
},
{
  logo: 'Toulouse.png',
  name: 'Toulouse',
  ground: 'Toulouse',
  location: 'Stadium Municipal',
  capacity: 35470,
  league: 'Ligue 1',
  color: 'Ligue-1'
}
]
  }
}
