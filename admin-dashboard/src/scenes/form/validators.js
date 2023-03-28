import Joi from "joi";
import { requiredString } from "../../utils/validators";

import { phoneRegExp } from "./constants";

export const validationSchema = Joi.object({
  firstName: requiredString,
  lastName: requiredString,
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  contact: Joi.string().max(10).pattern(phoneRegExp).required(),
  address1: requiredString,
  address2: Joi.string().optional(),
});
