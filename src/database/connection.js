import sql from "mssql";

const dbsettings = {
    user: "procam",
    password: "PRO0902loc$?",
    server: "CAPRIND-01",
    //server: "caprind.myftp.org",
    database: "PLE",
    trustServerCertificate: true,
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1',
            trustServerCertificate: true,
        }
    }
};

export async function getconnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool
        // const result = await pool.request().query("SELECT * from clientes");
        // console.log(result);
    } catch (error) {
        console.log(error)
    }

}
