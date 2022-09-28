import { Dice } from 'dice-typescript';
import { SlashCommandBuilder, ChatInputCommandInteraction, DirectoryChannel } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

const getRandomInt = (max: number, min:number) => Math.floor(Math.random() * (max - min + 1)) + min; 

// example of a slash command with a required parameter
export const roll10DiceCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName('roll-10-dice')
        .setDescription('Roll 10 dices'),

    respond: async (interaction: ChatInputCommandInteraction) => {
        const diceFace = 6;
        let result = [];
        let i = 0;
        while (i < 10){
            let temp: number =  getRandomInt(1,6);
            result.push(temp);
            i++
        }
        let done: boolean = false;
        await interaction.reply(`here is the result:`);
        result.forEach(async function (int){        
            await interaction.followUp(`${int}`);
        })

    }

}