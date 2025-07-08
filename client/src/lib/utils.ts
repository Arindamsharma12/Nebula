export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-[#2d3135] dark:bg-[#1d1f21] dark:text-gray-200"

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: isDarkMode ? "#e5e7eb" : "", // Text color for headers
      '& [role="row"] > *': {
        backgroundColor: isDarkMode ? "#1d1f21" : "white", // Background for individual header cells
        borderColor: isDarkMode ? "#2d3135" : "", // Border color for header cells
      },
    },
    // Add styling for the DataGrid rows
    "& .MuiDataGrid-row": {
      backgroundColor: isDarkMode ? "#121212" : "white", // Background color for the rows
      color: isDarkMode ? "#e5e7eb" : "rgba(0, 0, 0, 0.87)", // Text color for the rows (adjust as needed)
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
      // You might also want to style hovered rows for better UX
      "&:hover": {
        backgroundColor: isDarkMode ? "#2d3135" : "#f5f5f5", // Hover background
      },
    },
    "& .MuiDataGrid-cell": {
      border: "none", // Keeps individual cell borders off if desired
      color: isDarkMode ? "#e5e7eb" : "rgba(0, 0, 0, 0.87)", // Ensure cell text color matches row
    },
    "& .MuiIconbutton-root": {
      color: isDarkMode ? "#a3a3a3" : "",
    },
    "& .MuiTablePagination-root": {
      color: isDarkMode ? "#a3a3a3" : "",
    },
    "& .MuiTablePagination-selectIcon": {
      color: isDarkMode ? "#a3a3a3" : "",
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
    },
    // Optional: Style for the footer if it's not covered by pagination
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: isDarkMode ? "#1d1f21" : "white",
      color: isDarkMode ? "#a3a3a3" : "",
      borderColor: isDarkMode ? "#2d3135" : "",
    },
  };
};

export function formatISODateToReadable(isoDateString: string): string {
  try {
    const date = new Date(isoDateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error("Invalid date string provided:", isoDateString);
      return "";
    }

    const day = date.getUTCDate(); // Use UTC day to avoid timezone issues
    const monthIndex = date.getUTCMonth(); // Use UTC month
    const year = date.getUTCFullYear(); // Use UTC year

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthName = months[monthIndex];

    /**
     * Returns the appropriate suffix for a given day of the month.
     * @param day The day of the month (1-31).
     * @returns The suffix (e.g., "st", "nd", "rd", "th").
     */
    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th'; // Handles 11th, 12th, 13th
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const dayWithSuffix = `${day}${getDaySuffix(day)}`;

    return `${dayWithSuffix} ${monthName} ${year}`;

  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}