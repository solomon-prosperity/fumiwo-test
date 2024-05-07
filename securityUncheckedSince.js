const organisation = {
    name: "entreprise",
    securityCheck: "03/10/2021",
    services: [
    {
    name: "commercial",
    securityCheck: "03/10/2021",
            services: [
            {
            name: "vente",
            securityCheck: "14/11/2021"
            },
            {
            name: "marketing",
            securityCheck: "30/06/2020",
            },
            {
            name: "communication",
            securityCheck: "08/03/2021",
            services: [
            {
            name: "design",
            securityCheck: "27/07/2021"
            
            }
            ]
            }
            ]
    },
    {
    name: "technique",
    securityCheck: "24/08/2021",
    services: [
    {
    name: "electronique",
    securityCheck: "14/11/2021"
    },
    {
    name: "robotique",
    securityCheck: "30/06/2020",
    services: [
    {
    name: "mécanique",
    securityCheck: "12/08/2021"
    
    },
    {
    name: "automatisme",
    securityCheck: "01/09/2021"
    
    },
    {
    name: "IA",
    
    securityCheck: "07/09/2021"
    
    }
    ]
    }
    ]
    },
    {
        name: "logistique",
        securityCheck: "03/10/2021",
services: [
{
name: "transport",
securityCheck: "14/11/2021"
},
{
name: "etiquetage",
securityCheck: "30/06/2020"
},
{
name: "nettoyage",
securityCheck: "05/09/2021"
},
]
    },
]
}
const formatDate = (dateString) => {
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dateString)) {
        throw new Error('Invalid date format. Date must be in DD/MM/YYYY format.');
    }
    const parts = dateString.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
}
const securityUncheckedSince = (data, nbMonth) => {
    const currentDate = new Date();
    const thresholdDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - nbMonth, currentDate.getDate());

    let result = [];
    for (let i = 0 ; i < data.services.length; i += 1) {
        const service = data.services[i];
        if (formatDate(service.securityCheck) < thresholdDate && result.indexOf(service.name) < 0) {
            result.push(service.name);
        }
        // evaluate for sub services if exist
        if (service.services) {
            const subService = securityUncheckedSince(service, nbMonth);
            result = result.concat(subService);
        }
    }
    return result;
}
const result = securityUncheckedSince(organisation, 3);
console.log(result);