
async function fetchProfileData() {
    const url = ' https://mairahandrade.github.io/portfolio/';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
