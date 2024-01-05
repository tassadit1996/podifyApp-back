import { getAutoGeneratedPlaylit, getFollowersProfile, getPublicPlaylist, getPublicProfile, getPublicUploads, getRecommendedByProfile, getUploads, updateFollower } from "#/controllers/profile";
import { isAuth, mustAuth } from "#/middleware/auth";
import { Router } from "express";

const router = Router()

router.post('/update-follower/:profileId', mustAuth, updateFollower )
router.get('/uploads', mustAuth, getUploads)
router.get('/uploads/:profileId', getPublicUploads)
router.get('/info/:profileId', getPublicProfile)
router.get('/playlist/:profileId', getPublicPlaylist)
router.get("/recommended", isAuth, getRecommendedByProfile, getPublicPlaylist)
router.get("/auto-generated-playlist", mustAuth, getAutoGeneratedPlaylit)
router.get("/followers", mustAuth, getFollowersProfile)


export default router