import { Dice } from 'dice-typescript';
import { SlashCommandBuilder, ChatInputCommandInteraction, DirectoryChannel } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";


// example of a slash command with a required parameter
export const rollCommand: DiscordBotSlashCommand = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .addNumberOption(option => 
            option.setName('dice')
                .setDescription('Dice face, can only be 4, 6, 8, 10, 12, 20, 100')
                .setRequired(true))
        .setDescription('Roll the dice'),

    respond: async (interaction: ChatInputCommandInteraction) => {
        const diceFace = interaction.options.getNumber('dice', true);
        const diceToRoll = new Dice();
        let validDice: Array<number>;
        validDice = [4, 6, 8, 10, 12, 20, 100]; 
        if (validDice.includes(diceFace)) {
            const rollCommand = "1d" + diceFace.toString();
            const result = diceToRoll.roll(rollCommand).total;
            await interaction.reply(`${result}`);
        } else {
            interaction.reply("The dice is not valid");
        }
        
    }

}
