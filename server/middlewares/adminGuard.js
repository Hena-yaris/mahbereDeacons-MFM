const adminGuard = (req,res,next)=> {

    const key = req.headers["x-admin-key"];

    if(!key) return res.status(403).json({message: "Admin key required!"});

    if(key !== process.env.ADMIN_SECRET){
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
}

module.exports= adminGuard;