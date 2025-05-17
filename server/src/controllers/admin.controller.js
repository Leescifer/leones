export const getAdminID = (req, res) => {
    const {admin_id} = req.params;

    if (!admin_id) {
        console("ADMIN ID IS NEEDED");
    }

    if (admin_id) {
        const admin = admin_id(save);
    }
    else{
        req.status(401).json({
            status: "failed",
            message: "admin is not fetched"
        })
    }
}