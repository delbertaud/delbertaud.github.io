import openpyxl as xl
from faker import Faker

wb = xl.Workbook()

ws = wb.active
ws.title = "Contacts"

fake = Faker()

for row in range(1, 11):
    if row == 1:
        ws.append(["Name", "Phone Number"])
        continue
    ws.append([
        fake.name(),
        fake.phone_number()
        ])

wb.save("contacts.xlsx")