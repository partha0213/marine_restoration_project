import dash_core_components as dcc
import dash_html_components as html
from app import app

# Define the layout of the dashboard
layout = html.Div([
    # Header section
    html.Header([
        html.H1("Marine Ecosystem Restoration Dashboard"),
        html.P("Monitoring Marine Pollution and Restoration Efforts")
    ], style={'textAlign': 'center', 'padding': '10px', 'backgroundColor': '#f4f4f4'}),

    # Pollution Type Selection (Dropdown)
    html.Div([
        html.Label('Select Pollution Type:'),
        dcc.Dropdown(
            id='pollution-dropdown',
            options=[
                {'label': 'All', 'value': 'All'},
                {'label': 'Oil Spills', 'value': 'Oil Spills'},
                {'label': 'Plastic Waste', 'value': 'Plastic Waste'},
                {'label': 'Chemical Discharge', 'value': 'Chemical Discharge'},
                {'label': 'Sewage', 'value': 'Sewage'},
                # Add more pollution types as needed
            ],
            value='All',  # Default value
            placeholder="Choose a pollution type",
        )
    ], style={'width': '50%', 'margin': 'auto', 'padding': '20px'}),

    # Graph displaying pollution data
    html.Div([
        dcc.Graph(id='pollution-graph')
    ], style={'padding': '20px'}),

    # Pollution statistics section
    html.Div(id='pollution-stats', style={'textAlign': 'center', 'padding': '20px', 'backgroundColor': '#f9f9f9'}),

    # Footer section
    html.Footer([
        html.P("Marine Ecosystem Restoration Project © 2024"),
        html.A("Contact Us", href="mailto:info@merp.org"),
    ], style={'textAlign': 'center', 'padding': '10px', 'backgroundColor': '#f4f4f4'})
])
