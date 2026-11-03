import { z } from 'zod';

/**
 * The one thing the form is about. There is no picker any more: every
 * enquiry is an AI optimisation enquiry. The value is what the
 * `contact_messages.service` column stores; the label is what people read
 * in the inbox and on the sheet.
 */
export const CONTACT_SERVICE = {
  value: 'ai-optimisation',
  label: 'AI optimisation',
} as const;

/**
 * The three quick picks that replace the old free-text brief, one answer
 * each so the form stays three short selects. Keys are
 * what gets stored; the English labels here are for the inbox and the
 * sheet. What the visitor reads comes from the dictionary, keyed the same.
 */
export const CONTACT_TOOLS = {
  chatgpt: 'ChatGPT',
  claude: 'Claude',
  copilot: 'Copilot',
  gemini: 'Gemini',
  api: 'Own build / API',
  other: 'Other or not sure',
} as const;

export const CONTACT_TEAM_SIZES = {
  '1-10': '1 to 10 people',
  '11-50': '11 to 50 people',
  '51-200': '51 to 200 people',
  '200+': 'More than 200 people',
} as const;

export const CONTACT_GOALS = {
  cost: 'Monthly cost',
  quality: 'Quality of output',
  privacy: 'Data and privacy',
  adoption: 'Adoption and speed',
  carbon: 'Energy and carbon',
} as const;

export type ContactTool = keyof typeof CONTACT_TOOLS;
export type ContactTeamSize = keyof typeof CONTACT_TEAM_SIZES;
export type ContactGoal = keyof typeof CONTACT_GOALS;

const toolKeys = Object.keys(CONTACT_TOOLS) as [ContactTool, ...ContactTool[]];
const sizeKeys = Object.keys(CONTACT_TEAM_SIZES) as [
  ContactTeamSize,
  ...ContactTeamSize[],
];
const goalKeys = Object.keys(CONTACT_GOALS) as [ContactGoal, ...ContactGoal[]];

/** The field errors, one per check. The dictionary carries each language's set. */
export interface ContactErrorMessages {
  tool: string;
  teamSize: string;
  goal: string;
  nameRequired: string;
  nameShort: string;
  nameLong: string;
  emailRequired: string;
  emailInvalid: string;
  messageLong: string;
}

export const CONTACT_ERRORS_EN: ContactErrorMessages = {
  tool: 'Pick your main tool',
  teamSize: 'Pick a team size',
  goal: 'Pick what should improve first',
  nameRequired: 'Your name is required',
  nameShort: 'Please enter your full name',
  nameLong: 'That name is a little long',
  emailRequired: 'Email is required',
  emailInvalid: 'Please enter a valid email address',
  messageLong: 'Please keep it under 4,000 characters',
};

/**
 * The schema with its messages in one language. The server validates with
 * the English set; the form builds one from the visitor's dictionary so the
 * field errors read in their language.
 */
export const createContactSchema = (
  m: ContactErrorMessages = CONTACT_ERRORS_EN,
) =>
  z.object({
    tool: z.enum(toolKeys, {
      errorMap: () => ({ message: m.tool }),
    }),
    teamSize: z.enum(sizeKeys, {
      errorMap: () => ({ message: m.teamSize }),
    }),
    goal: z.enum(goalKeys, {
      errorMap: () => ({ message: m.goal }),
    }),
    name: z
      .string({ message: m.nameRequired })
      .trim()
      .min(2, m.nameShort)
      .max(100, m.nameLong),
    email: z
      .string({ message: m.emailRequired })
      .trim()
      .email(m.emailInvalid)
      .max(200),
    company: z.string().trim().max(120).optional().or(z.literal('')),
    /** Optional notes. The picks above carry the brief on their own. */
    message: z
      .string()
      .trim()
      .max(4000, m.messageLong)
      .optional()
      .or(z.literal('')),
    /**
     * Honeypot. Bots fill every field; people never see it. It is NOT
     * validated here on purpose: a filled trap must never block a human with
     * a validation error (Chrome autofilled a field named "website" from a
     * saved address profile and the form jumped to it, off-screen, at the top
     * of the page). The server drops a filled trap quietly instead.
     */
    trap: z.string().optional(),
  });

export const contactSchema = createContactSchema();

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * The enquiry as one block of text, for the inbox, the sheet and the
 * `message` column. The picks come first so a reply can be drafted without
 * reading further; the visitor's own notes, if any, follow.
 */
export function composeContactBrief(input: ContactInput) {
  const lines = [
    `Tool: ${CONTACT_TOOLS[input.tool]}`,
    `Team: ${CONTACT_TEAM_SIZES[input.teamSize]}`,
    `Focus: ${CONTACT_GOALS[input.goal]}`,
  ];
  const notes = input.message?.trim();
  return notes ? `${lines.join('\n')}\n\n${notes}` : lines.join('\n');
}
