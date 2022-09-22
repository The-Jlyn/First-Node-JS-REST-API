const express = require('express');
const app = express();


app.get('/students', (req, res) => {
   
    res.json({

        message: [
            {
              "ID": "1",
              "Name": "Senpai",
              "Gender": "1",
              "Class": "32",
              "Seat": "15",
              "Club": "0",
              "Persona": "1",
              "Crush": "0",
              "BreastSize": "0",
              "Strength": "0",
              "Hairstyle": "1",
              "Color": "Black",
              "Eyes": "Black",
              "EyeType": "Default",
              "Stockings": "None",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13.01_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Hangout_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Read_Sit_Eat_Sit_Clean_Read_Shoes_Stand",
              "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
            },
            {
              "ID": "2",
              "Name": "Yui Rio",
              "Gender": "0",
              "Class": "11",
              "Seat": "14",
              "Club": "1",
              "Persona": "5",
              "Crush": "0",
              "BreastSize": "0.5",
              "Strength": "0",
              "Hairstyle": "2",
              "Color": "Red",
              "Eyes": "Red",
              "EyeType": "Default",
              "Stockings": "Red",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "3",
              "Name": "Yuna Hina",
              "Gender": "0",
              "Class": "12",
              "Seat": "14",
              "Club": "1",
              "Persona": "6",
              "Crush": "0",
              "BreastSize": "0.8",
              "Strength": "0",
              "Hairstyle": "3",
              "Color": "Yellow",
              "Eyes": "Yellow",
              "EyeType": "Default",
              "Stockings": "Yellow",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "4",
              "Name": "Koharu Hinata",
              "Gender": "0",
              "Class": "21",
              "Seat": "14",
              "Club": "1",
              "Persona": "6",
              "Crush": "0",
              "BreastSize": "1.1",
              "Strength": "0",
              "Hairstyle": "4",
              "Color": "Green",
              "Eyes": "Green",
              "EyeType": "Default",
              "Stockings": "Green",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13.0001_13.375_15.5001_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "5",
              "Name": "Mei Mio",
              "Gender": "0",
              "Class": "22",
              "Seat": "14",
              "Club": "1",
              "Persona": "2",
              "Crush": "0",
              "BreastSize": "1.4",
              "Strength": "0",
              "Hairstyle": "5",
              "Color": "Blue",
              "Eyes": "Blue",
              "EyeType": "Default",
              "Stockings": "Blue",
              "Accessory": "7",
              "ScheduleTime": "7_7_8_13_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "6",
              "Name": "Saki Miyu",
              "Gender": "0",
              "Class": "31",
              "Seat": "14",
              "Club": "1",
              "Persona": "6",
              "Crush": "0",
              "BreastSize": "1.7",
              "Strength": "0",
              "Hairstyle": "6",
              "Color": "Cyan",
              "Eyes": "Cyan",
              "EyeType": "Default",
              "Stockings": "Cyan",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13.01_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": "Kokona Haruka's best friend and closest confidant. Kokona is likely to discuss personal matters with this girl."
            },
            {
              "ID": "7",
              "Name": "Kokona Haruka",
              "Gender": "0",
              "Class": "32",
              "Seat": "14",
              "Club": "1",
              "Persona": "6",
              "Crush": "1",
              "BreastSize": "2",
              "Strength": "0",
              "Hairstyle": "7",
              "Color": "Purple",
              "Eyes": "Purple",
              "EyeType": "Default",
              "Stockings": "Purple",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13.01_13.375_15.51_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "8",
              "Name": "Haruto Yuto",
              "Gender": "1",
              "Class": "11",
              "Seat": "12",
              "Club": "0",
              "Persona": "5",
              "Crush": "0",
              "BreastSize": "0",
              "Strength": "0",
              "Hairstyle": "2",
              "Color": "Red",
              "Eyes": "Red",
              "EyeType": "Default",
              "Stockings": "None",
              "Accessory": "3",
              "ScheduleTime": "7_7_8_13_13.375_15.5_16_16.5_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_Shoes_Stand",
              "Info": ""
            },
            {
              "ID": "9",
              "Name": "Sota Yuki",
              "Gender": "1",
              "Class": "12",
              "Seat": "12",
              "Club": "0",
              "Persona": "6",
              "Crush": "0",
              "BreastSize": "0",
              "Strength": "0",
              "Hairstyle": "3",
              "Color": "Yellow",
              "Eyes": "Yellow",
              "EyeType": "Default",
              "Stockings": "None",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13_13.375_15.5_16_16.5_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_Shoes_Stand",
              "Info": ""
            }]
    });
});

app.get('/students/1', (req, res) => {

    res.json({

        message: [
            {
              "ID": "1",
              "Name": "Senpai",
              "Gender": "1",
              "Class": "32",
              "Seat": "15",
              "Club": "0",
              "Persona": "1",
              "Crush": "0",
              "BreastSize": "0",
              "Strength": "0",
              "Hairstyle": "1",
              "Color": "Black",
              "Eyes": "Black",
              "EyeType": "Default",
              "Stockings": "None",
              "Accessory": "0",
              "ScheduleTime": "7_7_8_13.01_13.375_15.5_16_17.25_99_99",
              "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Hangout_Locker_Exit",
              "ScheduleAction": "Stand_Stand_Read_Sit_Eat_Sit_Clean_Read_Shoes_Stand",
              "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
            }
        ]

    })

});

app.listen(3001);