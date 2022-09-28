import { Collection } from 'discord.js';
import type { DiscordBotSlashCommand } from './types';
import { fooCommand } from './foo';
import { echoCommand } from './echo';
import { addCommand } from './add';
import { slotsCommand } from './slots';
import { rollCommand } from './roll';
import { roll10DiceCommand } from './roll10Dice'

const commands = new Collection<string, DiscordBotSlashCommand>();

commands.set(fooCommand.data.name, fooCommand);
commands.set(slotsCommand.data.name, slotsCommand);
commands.set(echoCommand.data.name, echoCommand);
commands.set(addCommand.data.name, addCommand);
commands.set(rollCommand.data.name, rollCommand);
commands.set(roll10DiceCommand.data.name, roll10DiceCommand);


export default commands;