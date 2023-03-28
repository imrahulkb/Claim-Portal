import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const imgData = "data:image/png;base64,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";

function getDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const formattedDate = `${dd}/${mm}/${yyyy}`;
    return formattedDate;
}

function calculateGroupTotal(category) {
    const groupedData = bills.reduce((acc, curr) => {
        const type = curr.type;
        const amount = curr.amount;
        if (!acc[type]) {
            acc[type] = {
                type: type,
                amount: amount
            };
        } else {
            acc[type].amount += amount;
        }
        return acc;
    }, {});
    if (category in groupedData) {
        return groupedData[category].amount;
    } else {
        return 0;
    }
}

var bills = [];

let pdf;

function generateNew(claimantDetails) {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(73, 19, "Expenses Claim Form");
    doc.addImage(imgData, "PNG", 13, 5, 43, 17.2);
    doc.setFontSize(12);

    var tableData = [
        ["Name of Claimant: " + claimantDetails.name, "Mobile No.: " + claimantDetails.mobile],
        ["Expenses made for (Event Name): " + claimantDetails.event.name, "Date: " + getDate()]
    ];

    // Define the table options
    var tableOptions = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 130 }, // Width of column 1
            1: { cellWidth: 50 } // Width of column 2
        }
    };

    // Add the table to the document
    autoTable(doc, {
        body: tableData,
        startY: 25,
        ...tableOptions
    });

    return doc;
}

export function generateExpenseClaim(claimantDetails) {
    let doc = generateNew(claimantDetails);
    var tableData2 = [
        [1, "Travelling Expenses", calculateGroupTotal("Travelling Expenses")],
        [2, "Food & Beverages", calculateGroupTotal("Food & Beverages")],
        [3, "Lodging & Boarding", calculateGroupTotal("Lodging & Boarding")],
        [4, "Printing Stationery & Consumables", calculateGroupTotal("Printing Stationery & Consumables")],
        [5, "Miscellaneous Expenses", calculateGroupTotal("Miscellaneous Expenses")],
        // [6, "Any other :", ""],
        [, "Net Amount", claimantDetails.event.total],
        [, "Less Advance Taken", claimantDetails.event.advance],
        [, "Gross Total", claimantDetails.event.gross],
        ["Rupees"]
    ];

    // Define the table options
    var tableOptions2 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 105 },
            2: { cellWidth: 60 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    autoTable(doc, {
        head: [["Sr No.", "Particular", "Amount"]],
        body: tableData2,
        startY: 43,
        ...tableOptions2
    });
    //table 3
    doc.text(16, 123, "Account Details for disbursement of Amount:");
    var tableData3 = [
        [1, "Account Name", claimantDetails.bank.name],
        [2, "Account No", claimantDetails.bank.number],
        [3, "Bank Name ", claimantDetails.bank.bank],
        [4, "Branch Name", claimantDetails.bank.branch],
        [5, "IFSC Code", claimantDetails.bank.ifsc]
    ];

    var tableOptions3 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 60 },
            2: { cellWidth: 105 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    autoTable(doc, {
        body: tableData3,
        startY: 125,
        ...tableOptions3
    });

    const text =
        "I hereby certify that the above expenses are incurred by me and have not been claimed anywhere else. The original bills are enclosed herewith.";
    doc.text(text, 15, 163, {
        maxWidth: 180
    });

    const text1 = "Name & Signature of Claimant: ";
    doc.text(text1, 15, 178, {
        maxWidth: 180
    });

    const text2 = "Note :";
    doc.text(text2, 15, 186, {
        maxWidth: 180
    });

    const text3 =
        "1. Tax Invoice without Section GST (27 AAAAI 6455 J 1 Z G) will be reimbursed after deducting GST Amount.";
    doc.text(text3, 22, 191, {
        maxWidth: 180
    });

    const text4 =
        "2. The GST Tax Invoice should be emailed to treasurer@ieeebombay.org immediately.";
    doc.text(text4, 22, 201, {
        maxWidth: 180
    });

    const text5 =
        "3. Tax Invoices with any other GST number will be rejected and will not be reimbursed.";
    doc.text(text5, 22, 206, {
        maxWidth: 180
    });

    const text6 =
        "4. Non-A4 bills are required to be pasted on separate papers. Loose bills will not be accepted.";
    doc.text(text6, 22, 211, {
        maxWidth: 180
    });

    const text7 =
        "5. Address for sending the Hard Copy: IEEE Mumbai Section Welfare Association, C/o B4/2, NICE, MIDC, SATPUR, NASHIK-422007, (TEL : 0253-2350221).";
    doc.text(text7, 22, 221, {
        maxWidth: 180
    });

    var tableData4 = [
        ["To be signed by IEEE MWSA officers:", "Approved for payment", ""],
        ["", "", ""],
        ["Treasurer", "Secretary", "Chair"]
    ];

    var tableOptions4 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 60 }, // Width of column 1
            1: { cellWidth: 60 },
            2: { cellWidth: 60 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    autoTable(doc, {
        body: tableData4,
        startY: 245,
        ...tableOptions4
    });
    doc.setFontSize(8);
    doc.text(73, 279, "01 Expense Claim form Version 2.0 dt 05.02.2023");

    pdf = doc.output('datauristring');
    return pdf;
    // doc.save("test.pdf");
}

export function generateStudentBranchRebate(claimantDetails) {
    let doc = generateNew(claimantDetails);
    var tableData2 = [
        ["IEEE Student Branch Code:"],
        ["Name of Institute/College :"],
        ["IEEE Branch Counselor Name:"]
    ];

    // Define the table options
    var tableOptions2 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 2
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 180 } // Width of column 1
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData2,
        startY: 34,
        ...tableOptions2
    });

    var tableData3 = [
        ["IEEE Branch Counselor Email:", "Mobile:"],
        [
            "                                                   IEEE Student Membership Count : ",
            ""
        ],
        [
            "                                            IEEE Professional Membership Count:	",
            ""
        ],
        [
            "                                              IEEE Professional Membership Count:",
            ""
        ],
        [
            "                       Number of Event reported via Vtools in previous year:",
            ""
        ],
        [
            "                             Description of Funds : SB Rebate/Project Funds 	",
            ""
        ],
        [
            "                                                                                    Amount in INR",
            ""
        ]
    ];

    // Define the table options
    var tableOptions3 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 2
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 110 }, // Width of column 1
            1: { cellWidth: 70 } // Width of column 2
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData3,
        startY: 58,
        ...tableOptions3
    });

    //table 4
    doc.text(16, 123, "Account Details for disbursement of Amount:");
    var tableData4 = [
        [1, "Account Name", ""],
        [2, "Account No", ""],
        [3, "Bank Name ", ""],
        [4, "Branch Name", ""],
        [5, "IFSC Code", ""]
    ];

    var tableOptions4 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 40 },
            2: { cellWidth: 125 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };
    doc.autoTable({
        body: tableData4,
        startY: 125,
        ...tableOptions4
    });

    const text =
        "We hereby certify that the above amount will be used only for the IEEE activities.";
    doc.text(text, 15, 164, {
        maxWidth: 180
    });

    //table 5
    var tableData5 = [
        [
            "                                                                                                                                                                                                                                                                                                            ",
            " "
        ],
        ["Name: ", "Name: "],
        [
            "                   Student Branch Counselor",
            "                           Director / Principal"
        ]
    ];

    var tableOptions5 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 90 }, // Width of column 1
            1: { cellWidth: 90 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData5,
        startY: 170,
        ...tableOptions5
    });

    const text1 = "Note :";
    doc.text(text1, 15, 208, {
        maxWidth: 180
    });

    const text2 =
        "1. The amount must be confirmed from the IEEE MWSA Treasurer before submission of the form by email to treasurer@ieeebombay.org ";
    doc.text(text2, 22, 214, {
        maxWidth: 180
    });

    //table 6
    var tableData6 = [
        ["To be signed by IEEE MWSA officers:", "Approved for payment"]
    ];

    var tableOptions6 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 130 }, // Width of column 1
            1: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData6,
        startY: 245,
        ...tableOptions6
    });

    var tableData7 = [
        [
            "                                                                                                                                                                                                                                              ",
            "",
            ""
        ],
        [
            "                   Treasurer",
            "                         Secretary",
            "                       Chair"
        ]
    ];

    var tableOptions7 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 65 }, // Width of column 1
            1: { cellWidth: 65 },
            2: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData7,
        startY: 250,
        ...tableOptions7
    });

    doc.setFontSize(8);
    doc.text(
        70,
        279,
        "05 Student Branch Funds Transfer Form Version 1.0 dt 02.10.2022"
    );
    pdf = doc.output('datauristring');
    return pdf;
}

export function generateAdvanceClaim(claimantDetails) {
    let doc = generateNew(claimantDetails);

    var tableData2 = [
        ["                     ", "", ""],
        ["                     ", "", ""],
        ["                     ", "", ""],
        ["                     ", "", ""],
        ["                     ", "", ""],
        [
            "                     ",
            "                                                                                   Net Amount",
            ""
        ]
    ];

    // Define the table options
    var tableOptions2 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 105 },
            2: { cellWidth: 60 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    doc.autoTable({
        head: [
            [
                " Sr No.",
                "                                     Particular",
                "                  Amount"
            ]
        ],
        body: tableData2,
        startY: 43,
        ...tableOptions2
    });

    //table 3
    doc.text(16, 123, "Account Details for disbursement of Amount:");
    var tableData3 = [
        [1, "Account Name", ""],
        [2, "Account No", ""],
        [3, "Bank Name ", ""],
        [4, "Branch Name", ""],
        [5, "IFSC Code", ""]
    ];

    var tableOptions3 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 60 },
            2: { cellWidth: 105 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };
    doc.autoTable({
        body: tableData3,
        startY: 125,
        ...tableOptions3
    });

    const text =
        "I hereby certify that the above expenses are incurred by me and have not been claimed anywhere else. The original bills are enclosed herewith.";
    doc.text(text, 15, 163, {
        maxWidth: 180
    });

    const text1 = "Name & Signature of Claimant: ";
    doc.text(text1, 15, 185, {
        maxWidth: 180
    });

    const text2 = "Note :";
    doc.text(text2, 15, 194, {
        maxWidth: 180
    });

    const text3 =
        "1. Tax Invoice without Section GST (27 AAAAI 6455 J 1 Z G) will be reimbursed after deducting GST Amount.";
    doc.text(text3, 22, 200, {
        maxWidth: 180
    });

    const text4 =
        "2. The GST Tax Invoice should be emailed to treasurer@ieeebombay.org immediately.";
    doc.text(text4, 22, 210, {
        maxWidth: 180
    });

    const text5 =
        "3. Tax Invoices with any other GST number will be rejected and will not be reimbursed.";
    doc.text(text5, 22, 215, {
        maxWidth: 180
    });

    const text6 =
        "4. Non-A4 bills are required to be pasted on separate papers. Loose bills will not be accepted.";
    doc.text(text6, 22, 220, {
        maxWidth: 180
    });

    //table 6
    var tableData6 = [
        ["To be signed by IEEE MWSA officers:", "Approved for payment"]
    ];

    var tableOptions6 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 130 }, // Width of column 1
            1: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData6,
        startY: 245,
        ...tableOptions6
    });

    var tableData7 = [
        [
            "                                                                                                                                                                                                                                              ",
            "",
            ""
        ],
        [
            "                   Treasurer",
            "                         Secretary",
            "                       Chair"
        ]
    ];

    var tableOptions7 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 65 }, // Width of column 1
            1: { cellWidth: 65 },
            2: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData7,
        startY: 250,
        ...tableOptions7
    });

    doc.setFontSize(8);
    doc.text(70, 279, "02 Advance Request Form Version 1.0 dt 02.10.2022");

    pdf = doc.output('datauristring');
    return pdf;
    // doc.save("test.pdf");
}

export function generateConferenceClaim(claimantDetails) {
    let doc = generateNew(claimantDetails);

    var tableData2 = [["Conference Name :"]];

    // Define the table options
    var tableOptions2 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 4,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 180 } // Width of column 1
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData2,
        startY: 50,
        ...tableOptions2
    });

    var tableData3 = [
        [" Date of Conference :", ""],
        [" Number of Papers Received :", ""],
        [" Number of Papers Accepted :", ""],
        [" Number of Papers Presented: ", ""],
        [" Number of Papers Published :", ""],
        [" IEEEXplore Publication Date :", ""],
        [" IEEEXplore Publication Link :", ""]
    ];

    // Define the table options
    var tableOptions3 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 50 }, // Width of column 1
            1: { cellWidth: 130 } // Width of column 2
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData3,
        startY: 62,
        ...tableOptions3
    });

    var tableData8 = [
        [
            "                                                                    Conference Deposit details"
        ]
    ];

    // Define the table options
    var tableOptions8 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 180 } // Width of column 1
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData8,
        startY: 104,
        ...tableOptions8
    });

    var tableData9 = [
        ["                     Date of payment:", ""],
        ["                                 Amount :", ""],
        ["   Transaction ID/ Cheque No :", ""],
        ["        Name of Account Holder:", ""]
    ];

    // Define the table options
    var tableOptions9 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 50 }, // Width of column 1
            1: { cellWidth: 130 } // Width of column 2
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData9,
        startY: 110,
        ...tableOptions9
    });
    //table 4
    doc.text(16, 144, "Account Details for disbursement of Amount:");
    var tableData4 = [
        [1, "Account Name", ""],
        [2, "Account No", ""],
        [3, "Bank Name ", ""],
        [4, "Branch Name", ""],
        [5, "IFSC Code", ""]
    ];

    var tableOptions4 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 40 },
            2: { cellWidth: 125 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };
    doc.autoTable({
        body: tableData4,
        startY: 146,
        ...tableOptions4
    });

    const text =
        "We hereby certify that the above amount will be used only for the IEEE activities.";
    doc.text(text, 15, 185, {
        maxWidth: 180
    });

    //table 5
    var tableData5 = [
        [
            "                                                                                                                                                                                                                                                                                                            ",
            " "
        ],
        ["Name: ", "Name: "],
        [
            "                   Student Branch Counselor",
            "                           Director / Principal"
        ]
    ];

    var tableOptions5 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 90 }, // Width of column 1
            1: { cellWidth: 90 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData5,
        startY: 190,
        ...tableOptions5
    });

    //table 6
    var tableData6 = [
        ["To be signed by IEEE MWSA officers:", "Approved for payment"]
    ];

    var tableOptions6 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 130 }, // Width of column 1
            1: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData6,
        startY: 245,
        ...tableOptions6
    });

    var tableData7 = [
        [
            "                                                                                                                                                                                                                                              ",
            "",
            ""
        ],
        [
            "                   Treasurer",
            "                         Secretary",
            "                       Chair"
        ]
    ];

    var tableOptions7 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 65 }, // Width of column 1
            1: { cellWidth: 65 },
            2: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData7,
        startY: 250,
        ...tableOptions7
    });

    doc.setFontSize(8);
    doc.text(
        70,
        279,
        "03 Conference Deposit Request Form Version 1.0 dt 02.10.2022"
    );

    pdf = doc.output('datauristring');
    return pdf;
    // doc.save("test.pdf");
}

export function generateHonorariumClaim(claimantDetails) {
    let doc = generateNew(claimantDetails);

    var tableData2 = [
        [
            " Sr No ",
            "      Date",
            "                               Particular",
            "        Amount"
        ],
        ["                                  ", "", "", ""]
    ];

    // Define the table options
    var tableOptions2 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 4
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 20 }, // Width of column 1
            1: { cellWidth: 30 },
            2: { cellWidth: 90 },
            3: { cellWidth: 40 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData2,
        startY: 55,
        ...tableOptions2
    });

    var tableData3 = [
        [
            "                                                                                                                 Gross Amount",
            ""
        ],
        [
            "                                                                      (If Amount above 10,000/–) TDS @ 10%",
            ""
        ],
        [
            "                                                                                                                     Net Amount",
            ""
        ],
    ];

    // Define the table options
    var tableOptions3 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 3
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 140 }, // Width of column 1
            1: { cellWidth: 40 } // Width of column 2
        }
    };

    // Add the table to the document
    doc.autoTable({
        body: tableData3,
        startY: 87,
        ...tableOptions3
    });

    //table 4
    doc.text(16, 153, "Account Details for disbursement of Amount:");
    var tableData4 = [
        [1, "Account Name", ""],
        [2, "Account No", ""],
        [3, "Bank Name ", ""],
        [4, "Branch Name", ""],
        [5, "IFSC Code", ""],
        [6, "PAN (11 digits)", ""],
        [7, "Email Address", ""]
    ];

    var tableOptions4 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 15 }, // Width of column 1
            1: { cellWidth: 40 },
            2: { cellWidth: 125 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };
    doc.autoTable({
        body: tableData4,
        startY: 155,
        ...tableOptions4
    });

    const text =
        "I hereby certify that the above details are correct. I understand that this amount will be reflected in my Income Statement and Form-16 will be received by Email from IEEE MSWA. ";
    doc.text(text, 15, 205, {
        maxWidth: 180
    });

    const text1 = "Name & Signature of Claimant:";
    doc.text(text1, 15, 224, {
        maxWidth: 180
    });

    const text2 = "Note :";
    doc.text(text2, 15, 234, {
        maxWidth: 180
    });

    const text3 = "1.	TDS is mandatory as per Income Tax Act";
    doc.text(text3, 16, 238, {
        maxWidth: 180
    });

    const text4 =
        "2.	No disbursement will be given in case of non-availability/incorrect PAN.";
    doc.text(text4, 16, 242, {
        maxWidth: 180
    });

    //table 6
    var tableData6 = [
        [" To be signed by IEEE MWSA officers:", "   Approved for payment"]
    ];

    var tableOptions6 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 130 }, // Width of column 1
            1: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData6,
        startY: 246,
        ...tableOptions6
    });

    var tableData7 = [
        [
            "                                                                                                                                                                                                                                              ",
            "",
            ""
        ],
        [
            "                   Treasurer",
            "                         Secretary",
            "                       Chair"
        ]
    ];

    var tableOptions7 = {
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0], // set border color to black
            textColor: [0, 0, 0], // set text color to black
            fillColor: [255, 255, 255], // set background ,color to white
            cellPadding: 1,
            fontStyle: "bold"
        },
        margin: { left: 15 }, // Left margin of the table
        columnStyles: {
            0: { cellWidth: 65 }, // Width of column 1
            1: { cellWidth: 65 },
            2: { cellWidth: 50 }
        },
        rowStyles: {
            2: { cellHeight: 20 }
        },
        headStyles: {
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0],
            rowHeight: 10 // set the height of the first row to 20 units
        }
    };

    doc.autoTable({
        body: tableData7,
        startY: 251,
        ...tableOptions7
    });

    doc.setFontSize(8);
    doc.text(
        70,
        279,
        "04 Honorarium / Remuneration form Version 1.0 dt 02.10.2022"
    );

    pdf = doc.output('datauristring');
    return pdf;
    // doc.save("test.pdf");
}