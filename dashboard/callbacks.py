from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd
from app import app

# Load pollution data (assuming CSV file is used)
# Adjust the file path as per your project structure
pollution_data = pd.read_csv('../data/pollution_data.csv')

# Define a sample dropdown for filtering pollution by type
@app.callback(
    Output('pollution-graph', 'figure'),
    [Input('pollution-dropdown', 'value')]
)
def update_graph(pollution_type):
    """
    Updates the pollution graph based on the selected pollution type.
    Args:
        pollution_type (str): The type of pollution selected from the dropdown.
    Returns:
        fig: A Plotly figure to be displayed.
    """
    # Filter data based on the selected pollution type
    if pollution_type is None or pollution_type == 'All':
        filtered_data = pollution_data
    else:
        filtered_data = pollution_data[pollution_data['pollution_type'] == pollution_type]

    # Create a plot using Plotly Express
    fig = px.scatter(
        filtered_data,
        x='longitude',
        y='latitude',
        color='severity',
        size='pollution_extent',
        hover_name='location',
        title=f'Pollution Incidents - {pollution_type}'
    )
    return fig

# Additional callbacks for other dashboard interactivity
@app.callback(
    Output('pollution-stats', 'children'),
    [Input('pollution-dropdown', 'value')]
)
def update_stats(pollution_type):
    """
    Updates the pollution statistics text based on the selected pollution type.
    Args:
        pollution_type (str): The type of pollution selected from the dropdown.
    Returns:
        str: The summary statistics of the selected pollution type.
    """
    if pollution_type is None or pollution_type == 'All':
        filtered_data = pollution_data
    else:
        filtered_data = pollution_data[pollution_data['pollution_type'] == pollution_type]
    
    total_incidents = filtered_data.shape[0]
    avg_severity = filtered_data['severity'].mean()

    return [
        html.P(f"Total Incidents: {total_incidents}"),
        html.P(f"Average Severity: {avg_severity:.2f}")
    ]

