
import { create, generateForgetPasswordLink, grantValid, sendProfile, sendReVerificationToken, signIn, updatePassword, updateProfile, verifyEmail } from '#/controllers/auth'
import { isValidPassResetToken, mustAuth } from '#/middleware/auth'
import fileParser from '#/middleware/fileParser'
import { validate } from '#/middleware/validator'
import { CreateUserSchema, SignInValidationSchema, TokenAndIDValidation, updatePasswordSchema } from '#/utils/validationSchema'
import { Router } from 'express'
const router = Router()

router.post("/create", validate(CreateUserSchema), create)
router.post("/verify-email", validate(TokenAndIDValidation), verifyEmail)
router.post("/re-verify-email", sendReVerificationToken)
router.post("/forget-password", generateForgetPasswordLink)
router.post("/verify-pass-reset-token", validate(TokenAndIDValidation), isValidPassResetToken, grantValid)
router.post('/update-password', validate(updatePasswordSchema), isValidPassResetToken, updatePassword)
router.post('/sign-in',
    validate(SignInValidationSchema),
    signIn)

router.get('/is-auth', mustAuth, sendProfile)


 
router.post('/update-profile', mustAuth, fileParser, updateProfile)
   






export default router