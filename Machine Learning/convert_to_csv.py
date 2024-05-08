with open("lung-cancer (1).data") as infile:
    # Read space-delimited file
    # And, replace spaces by commas.
    data = infile.read().replace(' ', ',')
    # Generate an Output file ( A .csv file)
    print(data, file=open('my_file.csv', 'w'))
