from __future__ import division
import warnings
import pandas as pd
import gsp_support as gsp

warnings.filterwarnings("ignore")

csvfile = "./demo_data.csv" 
df = pd.read_csv(csvfile, index_col = "Time") # read demo file
df.index = pd.to_datetime(df.index)
# Please read the paper to undertand following parameters. Note initial values of these parameters depends on the appliances used and the frequency of usage.
sigma = 20;
ri = 0.1
T_Positive = 20;
T_Negative = -20;
#Following parameters alpha and beta are used in Equation 15 of the paper 
# alpha define weight given to magnitude and beta define weight given to time
alpha = 0.5
beta  = 0.5
# this defines the  minumum number of times an appliance is set ON in considered time duration
instancelimit = 17 

#%% 
main_val = df.values # get only readings
main_ind = df.index  # get only timestamp
data_vec =  main_val  
#print(main_val)
#print(len(data_vec))
delta_p = [round(data_vec[i+1] - data_vec[i], 2) for i in range(0, len(data_vec) - 1)]
event =  [i for i in range(0, len(delta_p)) if (delta_p[i] > T_Positive or delta_p[i] < T_Negative) ]
#:print(event)
# initial and refined clustering block of Figure 1 in the paper
clusters = gsp.refined_clustering_block(event, delta_p, sigma, ri)
#print(clusters)
# Feature matching block of Figure 1 in the paper

finalclusters, pairs = gsp.pair_clusters_appliance_wise(clusters, data_vec, delta_p, instancelimit)
#print(finalclusters)
print(instancelimit)
appliance_pairs = gsp.feature_matching_module(pairs, delta_p, finalclusters, alpha, beta)

# create appliance wise disaggregated series
power_series = gsp.generate_appliance_powerseries(appliance_pairs, delta_p)

# Attach timestamps to generated series
power_timeseries = gsp.create_appliance_timeseries_signature(power_series, main_ind)

# create pandas dataframe of all series
gsp_result = pd.concat(power_timeseries, axis = 1)
print(gsp_result)
