// Search functionality filter
export function filterData(allrestraurants, searchText) {
    const searchData = allrestraurants.filter(restrorant => restrorant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))

    return searchData;
}